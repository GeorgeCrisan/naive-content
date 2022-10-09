import puppeteer from "puppeteer";

/***
 * This will run the puppeteer chrome browser and return the browser object
 */
async function getBrowser(options) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: options?.headless === 'y',
      args: ["--disable-setuid-sandbox"],
      'ignoreHTTPSErrors': true
    })
  } catch (e) {
    console.error("[Error] Sorry broksy, unable to initiate puppeteer browser ", e);
  } 

  return browser;
}

export default getBrowser;