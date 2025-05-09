const acceptNativePopups = require('./utils/nativePopupUtil');

describe('Mobile Navigation & Popup Handling', () => {
  it('should navigate to next screen on clicking Accept', async () => {
    await $('button*=Accept').click();
    await browser.pause(2000);
    await expect($('selector-for-next-screen')).toBeDisplayed();
  });

  it('should accept location and camera permissions', async () => {
    await acceptNativePopups();
    await acceptNativePopups();
  });
});
