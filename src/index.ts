import puppeteer from 'puppeteer-core';
import parse from './parse';
import save, { initChartPaths } from './save';
import createSession from './scrap';
import { QimenType } from './types';
import { initLogPath, log } from './util/logging';
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

      save(type, current, json);
    } catch (err) {
      log(type, current.toISOString());
      console.error(err);
    }

    // loop ends here
  } finally {
    await browser.close();
  }
})();

function init() {
  return Promise.all([initLogPath(), initChartPaths()]);
}
