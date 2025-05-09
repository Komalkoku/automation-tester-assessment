describe('Qantas Web UI Validation', () => {
  it('should display Qantas logo and login button', async () => {
    await browser.url('https://www.qantas.com/au/en.html');
    await expect($('img[alt="Qantas"]')).toBeDisplayed();
    await expect($('a[aria-label*="Log in"]')).toBeDisplayed();
  });
});
