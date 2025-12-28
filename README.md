# Voice-to-Text Desktop App (Tauri + Deepgram)

This Voice-to-Text Desktop App is built with Tauri and React. It enables users to transcribe their speech to text in real-time using the Deepgram API for accurate and low-latency transcription. The app supports push-to-talk voice input with start/stop recording controls and displays the transcribed text instantly.

## Screenshots

Below are screenshots showing the app in action during voice recording and transcription:

| **Recording State** | **Transcription Result** |
|----------------------|--------------------|
|<img width="998" height="785" alt="Screenshot 2025-12-28 100634" src="https://github.com/user-attachments/assets/3acfb813-605b-4d87-ab40-9c6d6737d7a6" /> | <img width="995" height="645" alt="Screenshot 2025-12-28 100710" src="https://github.com/user-attachments/assets/e3ae62cd-3847-4b16-9e54-37a078e6394a" /> |

## Features

- Push-to-talk voice input with clear start and stop controls.
- Real-time audio capture from the microphone.
- Streaming transcription using Deepgram's WebSocket API.
- Displays transcribed text live in a textarea.
- Handles permissions, errors, and connection status gracefully.

## Technology Stack

- **Frontend:**
  - React.js
  - Vite
  - TypeScript
 
- **Backend:**
  - Tauri Framework

- **Speech Recognition API:**
  - Deepgram API

## How to Set Up

Follow the steps below to set up the Voice-to-Text Desktop App on your local machine.

### Prerequisites

Ensure you have the following tools installed:

- **Node.js**: [Download and Install](https://nodejs.org/)
- **npm**: Comes with Node.js
- **Rust and Cargo**: [Download and Install](https://rust-lang.org/tools/install/)
- **Git**: [Download and Install](https://git-scm.com/)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone  https://github.com/nitin2001581402/Voice-to-Text-app-using-Tauri-Deepgram.git
cd voice-to-text-tauri
