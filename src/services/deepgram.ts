export class DeepgramClient {
  private socket: WebSocket | null = null;
  private apiKey: string;
  private onFinalTranscript: (text: string) => void;

  constructor(apiKey: string, onFinalTranscript: (text: string) => void) {
    this.apiKey = apiKey;
    this.onFinalTranscript = onFinalTranscript;
  }

  connect() {
    const url =
      'wss://api.deepgram.com/v1/listen?' +
      'language=en-US&punctuate=true&encoding=linear16&sample_rate=16000';

    this.socket = new WebSocket(url, ['token', this.apiKey]);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const transcript = data.channel?.alternatives?.[0]?.transcript;
      const isFinal = data.is_final === true;

      if (isFinal && transcript?.trim()) {
        this.onFinalTranscript(transcript.trim());
      }
    };
  }

  sendAudio(chunk: Int16Array) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(chunk.buffer);
    }
  }

  close() {
    this.socket?.close();
    this.socket = null;
  }
}
