# ⚡ Improved.ai

**Master any movement with AI precision.**

Improved.ai is a browser-based movement analysis platform that uses MediaPipe BlazePose to compare your form against any reference video in real time, giving you body-part-level visual feedback.

![Improved.ai](https://img.shields.io/badge/Improved-AI-red?style=for-the-badge) ![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite) ![MediaPipe](https://img.shields.io/badge/MediaPipe-BlazePose-00897B?style=for-the-badge)

## ✨ Features

- **⚡ Real-Time Analysis** — Live side-by-side comparison at 20+ FPS with color-coded skeleton overlay
- **🎯 Body-Part Scoring** — Per-segment accuracy for arms, legs, torso, and head
- **🤖 AI Coaching** — Personalized voice feedback and corrections
- **🔒 Privacy First** — All AI runs in your browser. Video never leaves your device
- **📊 Session Analytics** — Accuracy-over-time charts, body-part ranking, improvement tips
- **🪞 Mirror Mode** — Toggle webcam mirroring for natural practice
- **🐌 Speed Control** — Slow down reference video (0.5×, 0.75×, 1×)
- **🎥 Dual Input** — Use webcam or upload a second video for comparison

## 🎯 Applications

- **🏃 Sports** — Analyze athletic form and technique
- **💃 Dancing** — Learn choreography with real-time feedback
- **🎵 Music** — Compare instrument technique and posture

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## 🎮 How to Use

1. **Upload** any reference video (MP4, MOV, WebM) or drag & drop
2. **Choose** webcam or video input mode
3. **Click** "Start Dancing" — your input + reference play side-by-side
4. **Move** along — your skeleton lights up green (matching) or red (off)
5. **Stop** to see your session summary with charts and tips

## 🧠 How It Works

```
Reference Video → MediaPipe BlazePose → 33 Keypoints → Normalize
                                                         ↓
User Input      → MediaPipe BlazePose → 33 Keypoints → Normalize → Cosine Similarity → Score
```

1. **Pose Normalization** — Body-center coordinates with torso-length scaling (size-invariant)
2. **Cosine Similarity** — Compares limb direction vectors per body segment
3. **Weighted Scoring** — Arms/legs weighted 1.5×, torso 1×, head 0.5×
4. **Confidence Filtering** — Only scores joints with visibility > 0.4

## 📁 Project Structure

```
src/
├── App.jsx                     # Main orchestrator
├── index.css                   # Design system (red & white theme)
├── components/
│   ├── VideoPlayer.jsx         # Reference video + pose extraction
│   ├── WebcamFeed.jsx          # User webcam + scored skeleton
│   ├── UserVideo.jsx           # User video upload + pose extraction
│   ├── ScoreDisplay.jsx        # Score ring + body-part breakdown
│   ├── SessionSummary.jsx      # Post-session analytics
│   └── DancingSkeleton.jsx     # Animated SVG skeleton for welcome screen
└── utils/
    ├── poseNormalizer.js        # Body-center normalization + mirror
    ├── poseSimilarity.js        # Cosine similarity scoring engine
    ├── skeletonRenderer.js      # Color-coded skeleton drawing
    ├── audioCoach.js            # Voice feedback engine
    ├── feedbackEngine.js        # AI feedback generation
    ├── sessionRecorder.js       # Session recording utility
    └── nemotronAI.js            # AI model integration
```

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Vite + React 18** | Fast dev, HMR, modern tooling |
| **MediaPipe BlazePose** | 33-keypoint pose estimation (browser-native) |
| **Recharts** | Session analytics charts |
| **CSS Design System** | Red & white dark theme |
| **Web Audio API** | Voice coaching feedback |

## 📄 License

MIT
