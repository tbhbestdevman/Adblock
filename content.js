// content.js

// Function to block ads
function blockAds() {
    let ads = document.querySelectorAll('[id^="ad"], [class^="ad"], [id*="banner"], [class*="banner"]');
    for (let ad of ads) {
        ad.style.display = 'none';
    }
}

// Send a message to background.js to block ads
chrome.runtime.sendMessage({adBlocker: true}, function(response) {
    if (response.blockAds) {
        blockAds();
    }
});

// Listen for a message from popup.js to toggle the ad blocker
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggleAdBlocker) {
        blockAds();
    }
});