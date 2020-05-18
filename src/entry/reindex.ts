import fs from 'fs';
import dateGenerators from '../util/dates-generator';
import { QimenType } from '../constants/qimen-type';
import { pingEs, getChartPath, chartExists, indexToEs } from '../services/store';
import { getCliOption, validateCli } from '../util/cli';
import { createRunner } from '../util/runner';
import { Chart } from '../types';

const cliOption = getCliOption();

if (!validateCli(cliOption) || !QimenType.validate(cliOption.type)) {
  console.log('Usage: npm run indexing -- <type> <start> <finish> [--missing --ignore-es]');
  console.log('e.g. npm run indexing hour 2020-01-01T00:00:00 2020-01-31T21:00:00');
  console.log('e.g. npm run indexing -- month 2020-01 2030-12');
  console.log('e.g. npm run indexing -- year 2020 2030 --ignore-es');
  process.exit();
}

const qimen = QimenType[cliOption.type];

(async () => {
  if (!(await pingEs())) {
    console.log(`!! ElasticSearch is down. Reindex cannot happen without ElasticSearch.`);
    process.exit();
  }

  console.time('file scanning');

  const tasks = dateGenerators(qimen.type, cliOption.start, cliOption.finish)
    .filter((date) => chartExists(qimen.type, date))
    .map((date) => ({ date, chart: JSON.parse(fs.readFileSync(getChartPath(qimen.type, date), 'utf-8')) as Chart }))
    .map(({ date, chart }) => () => indexToEs(qimen.type, date, chart));

  console.timeEnd('file scanning');

  console.time('indexing');
  for (
    let runner = createRunner(tasks, 200), result = await runner.next(), i = 1;
    !(result.done ?? true);
    result = await runner.next(), i++
  ) {
    console.log(`batch ${i} done...`);
  }
  console.timeEnd('indexing');
})();
