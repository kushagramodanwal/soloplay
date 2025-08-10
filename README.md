# SoloPlay 🎵 — One YouTube Video at a Time, Across Tabs

**SoloPlay** is a smart Chrome extension that ensures **only one YouTube video plays at a time across all your browser tabs**. No more overlapping audio or manually pausing videos — SoloPlay automatically toggles playback between your YouTube tabs for a smooth, distraction-free experience.

---

## 🚀 Features

- **Cross-Tab Playback Control:** Guarantees only one YouTube video plays across all open tabs.
- **Automatic Switching:** Pausing a video in one tab triggers playback in another.
- **Seamless SPA Support:** Works perfectly with YouTube’s dynamic page loading.
- **Lightweight & Efficient:** Minimal impact on browser performance.
- **Background Coordination:** Uses a service worker to sync tabs invisibly.

---

## 🎯 How It Works

1. Play a video in any YouTube tab → SoloPlay pauses videos in all other tabs.
2. Pause the current video → SoloPlay finds another tab and starts playback there.
3. If no other tabs are available, playback stops until you manually play a video.
4. Smooth communication between tabs handled in the background.

---

## 📦 Installation

1. Clone or download this repo:
   ```bash
   git clone https://github.com/kushagramodanwal/soloplay.git
