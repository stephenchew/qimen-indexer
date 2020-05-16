import { getCliOption, validateCli } from '../util/cli';
import { QimenType } from '../constants/qimen-type';
import { pingEs } from '../services/store';

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
  if (!cliOption.options.ignoreEs && !(await pingEs())) {
    console.log(`!! ElasticSearch is down. If it's intentional, add --ignore-es option.`);
    process.exit();
  }

  console.log(qimen);
})();
