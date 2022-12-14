
import fs from "fs";
import { sanitizeUrl, prepareText, delay } from "../utils/index.js";

const scraperController = async (browser, options) => {

  try {
    const page = await browser.newPage();
    const prepareUrl = "https://" + sanitizeUrl(options.url);

    console.log("Attempting to navigate: ", prepareUrl);

    if (options.headless === "n") {
      const viewPortOptions = { width: 1920, height: 1080 };
      await page.setViewport(viewPortOptions);
      console.log("Normal mode. Start scaping with: ", options);
    } else {
      console.log("Headless mode. Start scaping with: ", options);
    }

    await page.goto(prepareUrl);

    const delayValue = !options?.delay || typeof options.delay !== "number" || options.delay > 5000 ? 500 : options.delay;

    await delay(delayValue);

    const extractedText = await page.$eval('*', (el) => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNode(el);
      selection.removeAllRanges();
      selection.addRange(range);
      return window.getSelection().toString();
    });

    await fs.promises.mkdir('./results', { recursive: true })
    const readyTextForFile = prepareText(extractedText, options.fileName);
    const saveLocation = `./results/${ options?.fileName ? options.fileName + ".md" : 'results.md' }`;
    await fs.promises.writeFile(saveLocation, readyTextForFile);
    console.log("Content saved to:", saveLocation);
    browser.close();
  } catch (e) {
    console.error(`[Error] Unable to navigate to ${options.url} and to fetch save any data.`, e?.message || e);
    browser.close();
  }
}

export default scraperController;