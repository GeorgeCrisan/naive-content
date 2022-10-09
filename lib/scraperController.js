
import fs from "fs";

const scraperController = async (browser, options) => {
  console.log("Start scaping with: ", options);
  try {
    const page = await browser.newPage();
    const prepareUrl = "https://" + options.url;

    console.log("Attempting to navigate: ", prepareUrl);


    if (options.headless === "n") {
      const viewPortOptions = { width: 1920, height: 1080 };
      await page.setViewport(viewPortOptions);
      console.log("Normal mode. Start scaping with: ", options);
    } else {
      console.log("Headless mode. Start scaping with: ", options);
    }

    await page.goto(prepareUrl);

    const extractedText = await page.$eval('*', (el) => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNode(el);
      selection.removeAllRanges();
      selection.addRange(range);
      return window.getSelection().toString();
    });

    await fs.promises.mkdir('./results', { recursive: true })
    await fs.promises.writeFile(`./results/${ options?.fileName || 'results.md' }`, extractedText);

    browser.close();
  } catch (e) {
    console.error(`[Error] Unable to navigate to ${options.url} and to fetch save any data.`, e);
    browser.close();
  }
}

export default scraperController;