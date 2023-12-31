/* global chrome */
window.completionPromise = new Promise((resolve) => {
  window.completionPromiseResolve = resolve;
});
chrome.runtime.sendMessage({ some: 'message' }, () => {
  chrome.runtime.getBackgroundPage((bgPage) => {
    window.completionPromiseResolve(bgPage.receivedMessage);
  });
});
