import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`ERROR: ${msg.text()}`);
    }
  });

  page.on('pageerror', exception => {
    console.log(`PAGE ERROR: ${exception}`);
  });

  console.log("Navigating to http://localhost:8080...");
  try {
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle', timeout: 10000 });
    console.log("Page loaded. Checking for errors...");
    // Wait for a second to let React render
    await page.waitForTimeout(2000);
  } catch (err) {
    console.log(`Navigation error: ${err.message}`);
  }

  await browser.close();
  console.log("Done checking.");
})();
