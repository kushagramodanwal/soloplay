let video = null;

function attachListeners() {
  video = document.querySelector('video');
  if (!video) return;

  video.addEventListener('play', () => {
    chrome.runtime.sendMessage({ type: 'video-played' });
  });

  video.addEventListener('pause', () => {
    chrome.runtime.sendMessage({ type: 'video-paused' });
  });

  chrome.runtime.onMessage.addListener((message) => {
    if (!video) return;
    if (message.type === 'pause-video' && !video.paused) {
      video.pause();
    } else if (message.type === 'play-video' && video.paused) {
      video.play();
    }
  });
}

// Initial attach
attachListeners();

// YouTube uses dynamic page loads - re-attach if video changes
const observer = new MutationObserver(() => {
  const currentVideo = document.querySelector('video');
  if (currentVideo !== video) {
    // Remove old listeners if needed
    video = null;
    attachListeners();
  }
});
observer.observe(document.body, { childList: true, subtree: true });
