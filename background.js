// background.js

let blockAds = true;

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({blockAds: blockAds}, function() {
        console.log("AdBlocker is: " + (blockAds ? "enabled" : "disabled"));
    });
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: blockAds};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "toggleAdBlocker") {
            blockAds = !blockAds;
            chrome.storage.sync.set({blockAds: blockAds}, function() {
                console.log("AdBlocker is: " + (blockAds ? "enabled" : "disabled"));
            });
        }
    }
);