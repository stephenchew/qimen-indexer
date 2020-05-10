import puppeteer from 'puppeteer-core';
import datesGenerator from './dates-generator';
import parse from './parse';
import { createRunner, Callable } from './runner';
import { initChartPaths, saveToFile, indexToEs } from './store';
import createSession from './scrap';
import { QimenType } from './types';
import { initLogPath, logCrawling, logIndexing } from './util/logging';
import { login } from './util/login';

(async () => {
  console.time('app');
  await init();

  console.time('login');
  const sessionInfo = await login();
  console.timeEnd('login');

  if (!sessionInfo) {
    console.log('[ERROR] Unable to login, please check your credential.');
    return;
  }

  const { csrf, cookies } = sessionInfo;
  const queryChart = createSession(csrf, cookies);

  // loop starts here

  const type: QimenType = 'hour';
  const start = new Date('2020-02-01T00:00:00');
  const finish = new Date('2020-02-07T21:00:00');

  const dates = datesGenerator(type, start, finish);

  console.log(`Running for ${type} from ${start.toString()} to ${finish.toString()}`);

  const responses: Callable<{ type: QimenType; date: Date; body: any }>[] = dates.map((current: Date) => () =>
    queryChart(type, current).then((body) => ({ type, date: current, body }))
  );

  for (
    let runner = createRunner(responses, 30), result = await runner.next();
    !(result.done ?? true);
    result = await runner.next()
  ) {
    // console.time('es');

    let promiseElastic = [];
    for (let settled of result.value) {
      // can't use array.forEach
      switch (settled.status) {
        case 'fulfilled':
          const type = settled.value.type;
          const date = settled.value.date;
          const json = parse(type, date, settled.value.body);
          saveToFile(type, date, json);

          promiseElastic.push(
            indexToEs(type, date, json)
              .then((resp) => ({ type, date, resp }))
              .catch((error) => ({ type, date, error }))
          );

          break;
        case 'rejected':
          // @TODO log to unprocessed
          break;
      }
    }

    (await Promise.allSettled(promiseElastic)).map((settled) => {
      if (settled.status === 'rejected') {
        logIndexing(type, settled.reason.date.toISOString());
      }
    });

    // console.timeEnd('es');

    console.log(`processed ${result.value.length} record(s)`);
  }
  console.timeEnd('app');
})();

async function init() {
  await Promise.all([initLogPath(), initChartPaths()]);
}
