// Add event listener for the 'toggle-sidebar' command. Triggered with 'ctrl + shift + Y'
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-sidebar") {
    browser.sidebarAction.open();
  }
});
