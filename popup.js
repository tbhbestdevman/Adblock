document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({toggleAdBlocker: true}, function(response) {
            console.log(response.status);
        });
    });
});