module.exports = async function acceptNativePopups() {
  try {
    if (driver.isAndroid) {
      await browser.acceptAlert();
    } else {
      await $('~Allow Once').click();
    }
  } catch (error) {
    console.log('No native popup:', error.message);
  }
};
