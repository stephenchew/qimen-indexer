import { Browser } from 'puppeteer-core';
import cheerio from 'cheerio';

const selector = 'input[name=Geju\\[access\\]]';

export const login = async (
  browser: Browser,
  passcode = '7676'
): Promise<{ csrf: string; cookies: string } | undefined> => {
  const page = await browser.newPage();

  await page.goto('http://fengshui-republic.com/qimen-access');

  const [input] = await Promise.all([page.$(selector), page.waitForSelector(selector)]);

  await input?.focus();
  await input?.type(passcode);
  await input?.press('Enter');

  const response = await page.waitForNavigation({ waitUntil: 'networkidle2' });

  const verificationButton = await page.$('#qimen-current-time');

  if (!verificationButton) {
    return undefined;
  }

  const $ = cheerio.load(await response.text());

  const meta = $('meta[name=csrf-token]').attr('content') ?? '';

  const cookies = await page.cookies();

  return {
    csrf: meta,
    cookies: cookies
      .filter((c) => c.name === '_csrf-frontend' || c.name === 'advanced-frontend')
      .map((c) => `${c.name}=${c.value}`)
      .reduce((val, curr) => `${val}; ${curr}`),
  };
};
