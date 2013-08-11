/*
Gets the saved value and redirects the tab.
If the user has not set a url to redirect to it goes to the options page of this extension.
*/
function redirect() {
    var redirectTo = localStorage["redirectingTo"];
    if (!redirectTo) {
        chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.update(tab.id, {url: "options.html"});
        });
        return;
    }
    chrome.tabs.getCurrent(function(tab) {
        chrome.tabs.update(tab.id, {url: redirectTo});
    });
}

document.addEventListener("DOMContentLoaded", redirect);
