import puppeteer from 'puppeteer-core';
import parse from './parse';
import { initChartPaths, saveToFile, indexToEs } from './store';
import createSession from './scrap';
import { QimenType } from './types';
import { initLogPath, logCrawling, logIndexing } from './util/logging';
import { login } from './util/login';

(async () => {
  await init();

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  try {
    const sessionInfo = await login(browser);

    if (!sessionInfo) {
      console.log('[ERROR] Unable to login, please check your credential.');
      return;
    }

    const { csrf, cookies } = sessionInfo;
    const queryChart = createSession(browser, csrf, cookies);

    // loop starts here

    const type: QimenType = 'hour';
    const current: Date = new Date();

    try {
      const response = await queryChart(type, current);
      const body = await response.text();
      const json = parse(type, current, body);

      saveToFile(type, current, json);

      try {
        const esResponse = await indexToEs(type, current, json);
        console.log('es', esResponse);
      } catch (err) {
        logIndexing(type, current.toISOString());
        console.error('Error indexing chart: ' + err);
      }
    } catch (err) {
      logCrawling(type, current.toISOString());
      console.error('Error crawling chart: ' + err);
    }

    // loop ends here
  } finally {
    await browser.close();
  }
})();

async function init() {
  await Promise.all([initLogPath(), initChartPaths()]);
}
