import { Browser, Overrides } from 'puppeteer-core';
import { QimenType } from './types';
import qs from 'querystring';
import { getTypeValue } from './util/constants';

const SOLAR = 1;

export default (browser: Browser, csrf: string, cookies: string) => async (type: QimenType, date: Date) => {
  const page = await browser.newPage();
  try {
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (req.resourceType() !== 'document') {
        req.abort();
        return;
      }

      const http = {
        method: 'POST',
        headers: {
          ...req.headers(),
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: cookies,
        },
        postData: qs.stringify({
          '_csrf-frontend': csrf,
          'Qimen[calendar]': SOLAR,
          'Qimen[type]': getTypeValue(type),
          'Qimen[en][year]': date.getFullYear(),
          'Qimen[en][month]': date.getMonth() + 1,
          'Qimen[en][day]': date.getDate(),
          'Qimen[en][hour]': date.getHours(),
          'Qimen[en][minute]': date.getMinutes(),
        }),
      } as Overrides;

      // console.log(http);
      // console.log(`### ${req.url()} : ${req.resourceType()}`);
      req.continue(http);
    });

    const response = await page.goto('http://fengshui-republic.com/qimengeju', { waitUntil: 'networkidle2' });

    if (response === null) {
      throw Error(`Response body is null`);
    } else if (response.status() > 300) {
      throw Error(`Response: ${response.status()}`);
    }
    
    return response;
  } finally {
    page.removeAllListeners('request');
  }
};
