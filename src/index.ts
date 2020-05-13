import datesGenerator from './dates-generator';
import parse from './parse';
import { createRunner, Callable } from './runner';
import { initChartPaths, saveToFile, indexToEs, chartExists } from './store';
import createSession from './scrap';
import { QimenType } from './types';
import { getCliOption, validateCli } from './util/cli';
import { clog, initLogPath, logCrawling, logIndexing } from './util/logging';
import { login } from './util/login';

const cliOption = getCliOption();

if (!validateCli(cliOption)) {
  console.log('Usage: npm start -- <type> <start> <finish> [--missing]');
  console.log('e.g. npm start hour 2020-01-01T00:00:00 2020-01-31T21:00:00');
  console.log('e.g. npm start -- month 2020-01 2030-12 --missing');
  process.exit();
}

(async () => {
  console.time('app');
  await init();

  // @TODO: wait for ElasticSearch server availability
  // @TODO: write a task to run through all charts json and index into ElasticSearch

  console.time('login');
  const sessionInfo = await login();
  console.timeEnd('login');

  if (!sessionInfo) {
    clog('[ERROR] Unable to login, please check your credential.');
    return;
  }

  const { csrf, cookies } = sessionInfo;
  const queryChart = createSession(csrf, cookies);

  const type: QimenType = cliOption.type;
  const start = cliOption.start;
  const finish = cliOption.finish;

  let dates = datesGenerator(type, start, finish);

  if (cliOption.options.missing) {
    dates = dates.filter((d) => !chartExists(type, d));
    clog(`Running only for missing '${type}' - ${dates.length} record(s)`);
    dates.forEach((d) => clog(d));
  } else {
    clog(`Running for '${type}' from`, start, 'to', finish, `- ${dates.length} record(s)`);
  }

  const responses: Callable<{ type: QimenType; date: Date; payload: any }>[] = dates.map((current: Date) => () =>
    queryChart(type, current)
      .then((body) => ({ type, date: current, payload: body }))
      .catch((err) => {
        throw { type, date: current, payload: err };
      })
  );

  for (
    let runner = createRunner(responses, 30), result = await runner.next();
    !(result.done ?? true);
    result = await runner.next()
  ) {
    let promiseElastic: Promise<{ type: QimenType; date: Date; resp: any }>[] = [];
    for (let settled of result.value) {
      // can't use array.forEach
      switch (settled.status) {
        case 'fulfilled':
          const type = settled.value.type;
          const date = settled.value.date;
          const json = parse(type, date, settled.value.payload);
          saveToFile(type, date, json);

          promiseElastic.push(
            indexToEs(type, date, json)
              .then((resp) => ({ type, date, resp }))
              .catch((error) => {
                throw { type, date, error };
              })
          );

          break;
        case 'rejected':
          logCrawling(settled.reason.type, settled.reason.date);
          clog(`Unable to scrap`, settled.reason.date);
          break;
      }
    }

    (await Promise.allSettled(promiseElastic)).map((settled) => {
      if (settled.status === 'rejected') {
        logIndexing(type, settled.reason.date.toISOString());
      }
    });

    clog(`processed ${result.value.length} record(s)`);
  }
  console.timeEnd('app');
})();

async function init() {
  await Promise.all([initLogPath(), initChartPaths()]);
}
