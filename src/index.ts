import puppeteer from 'puppeteer-core';
import { login } from './util/login';
import createSession from './scrap';
import fs from 'fs';
import { QimenType } from './types';
import { LOG_PATH, log } from './util/logging';
import parse from './parse';

init();

(async () => {
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
      console.log(body);
      // const json = parse(type, current, body);

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
  fs.mkdirSync(LOG_PATH, { recursive: true });
  fs.mkdirSync('./charts', { recursive: true });
}
