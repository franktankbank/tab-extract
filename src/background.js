let sidebarOpen = false;

browser.browserAction.onClicked.addListener(() => {
  console.log("Extension icon clicked");

  if (sidebarOpen) {
    browser.sidebarAction.close();
    sidebarOpen = false;
  } else {
    browser.sidebarAction.open();
    sidebarOpen = true;
  }
});
