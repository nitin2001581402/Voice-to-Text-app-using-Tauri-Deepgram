import { useRef, useState } from 'react';
import { DeepgramClient } from '../services/deepgram';

function floatTo16BitPCM(float32: Float32Array) {
  const buffer = new ArrayBuffer(float32.length * 2);
  const view = new DataView(buffer);

  let offset = 0;
  for (let i = 0; i < float32.length; i++, offset += 2) {
    const sample = Math.max(-1, Math.min(1, float32[i]));
    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }
  return new Int16Array(buffer);
}

export default function Recorder() {
  const [text, setText] = useState('');
  const [recording, setRecording] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const deepgramRef = useRef<DeepgramClient | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    if (recording) return;
    setRecording(true);

    streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });

    const audioContext = new AudioContext({ sampleRate: 16000 });
    audioContextRef.current = audioContext;

    const source = audioContext.createMediaStreamSource(streamRef.current);
    const processor = audioContext.createScriptProcessor(4096, 1, 1);
    processorRef.current = processor;

    const deepgram = new DeepgramClient(
      import.meta.env.VITE_DEEPGRAM_API_KEY,
      (finalText) =>
        setText((prev) =>
          prev ? prev + '\n' + capitalize(finalText) : capitalize(finalText)
        )
    );

    deepgram.connect();
    deepgramRef.current = deepgram;

    processor.onaudioprocess = (e) => {
      const pcm = floatTo16BitPCM(e.inputBuffer.getChannelData(0));
      deepgram.sendAudio(pcm);
    };

    source.connect(processor);
    processor.connect(audioContext.destination);
  };

  const stopRecording = () => {
    setRecording(false);
    processorRef.current?.disconnect();
    audioContextRef.current?.close();
    deepgramRef.current?.close();
    streamRef.current?.getTracks().forEach((t) => t.stop());
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🎙 Live Transcription</h1>

      <div className="controls">
        <button
          className="btn start"
          onClick={startRecording}
          disabled={recording}
        >
          ▶ Start Recording
        </button>

        <button
          className="btn stop"
          onClick={stopRecording}
          disabled={!recording}
        >
          ⏹ Stop Recording
        </button>

        <button className="btn clear" onClick={() => setText('')}>
          🧹 Clear Text
        </button>
      </div>

      <textarea
        className="transcript"
        value={text}
        readOnly
        placeholder="Your speech will appear here clearly..."
      />
    </div>
  );
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
