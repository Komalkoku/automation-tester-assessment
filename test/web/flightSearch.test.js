describe('Flight Search', () => {
  it('should search for flights from Sydney to Melbourne', async () => {
    await $('input[id*="from"]').setValue('Sydney');
    await browser.keys('Enter');
    await $('input[id*="to"]').setValue('Melbourne');
    await browser.keys('Enter');
    await $('button*=Search').click();
    await browser.pause(5000);
  });
});
