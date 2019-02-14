function redirectScihub() {
   console.log("redirecting");
   browser.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    browser.tabs.create({
     "url": "https://sci-hub.tw/" + url
    });
   });
}

browser.browserAction.onClicked.addListener(redirectScihub);



