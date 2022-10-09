import prompt from "prompt";
import runBrowser from "./lib/run-browser.js";
import scraperController from "./lib/scraperController.js";

const runProgram = async (options) => {
  const browser = await runBrowser(options);
  scraperController(browser, options);
}

prompt.start();

prompt.get([
    { name: "url", required: true, description: 'URL. Without http:// or https://' },
    { name: "fileName", description: "File name: The name and the extension. Default results.md"},
    { name: "delay", description: "Optional. A delay in ms. For example 2000 is 2 seconds." }
    // { name: "headless", required: true, description: 'Headless mode: Type "y" for yes or "n" for no.', pattern: /^(y\b|n)/ }
  ], (err, result) => {
  if (err) {
    console.error("[Error] Fuck, got some sort of an error", err);
  }

  if (result && result.url) {
    runProgram(result);
  } else {
    console.error("[Error] Something went wrong brosky. Provide url and title, and these two better be good.");
  }
});

