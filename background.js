let playingTabId = null;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (!sender.tab) return;

  if (message.type === 'video-played') {
    if (playingTabId !== sender.tab.id) {
      playingTabId = sender.tab.id;
      console.log(`Tab ${playingTabId} started playing.`);

      // Pause other tabs
      chrome.tabs.query({ url: '*://www.youtube.com/*' }, (tabs) => {
        tabs.forEach(tab => {
          if (tab.id !== playingTabId) {
            chrome.tabs.sendMessage(tab.id, { type: 'pause-video' });
          }
        });
      });
    }

  } else if (message.type === 'video-paused') {
    if (playingTabId === sender.tab.id) {
      console.log(`Tab ${playingTabId} paused.`);

      chrome.tabs.query({ url: '*://www.youtube.com/*' }, (tabs) => {
        // Try to find another tab to play
        const otherTab = tabs.find(tab => tab.id !== sender.tab.id);
        if (otherTab) {
          playingTabId = otherTab.id;
          console.log(`Switching play to tab ${playingTabId}`);
          chrome.tabs.sendMessage(playingTabId, { type: 'play-video' });
        } else {
          playingTabId = null;
        }
      });
    }
  }
});
