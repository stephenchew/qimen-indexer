import format from 'date-fns/format';
import fs from 'fs';
import { Chart, QimenType } from './types';
import { getTypeDateFormat } from './util/constants';

export const CHART_PATH = './charts';

export const initChartPaths = () => {
  const options = {
    recursive: true,
  };
  return Promise.all([
    new Promise((resolve) => {
      fs.mkdir(`${CHART_PATH}/year`, options, () => resolve());
    }),
    new Promise((resolve) => {
      fs.mkdir(`${CHART_PATH}/month`, options, () => resolve());
    }),
    new Promise((resolve) => {
      fs.mkdir(`${CHART_PATH}/day`, options, () => resolve());
    }),
    new Promise((resolve) => {
      fs.mkdir(`${CHART_PATH}/hour`, options, () => resolve());
    }),
  ]);
};

export default (type: QimenType, date: Date, data: Chart) => {
  fs.writeFileSync(
    `${CHART_PATH}/${type}/${format(date, getTypeDateFormat(type).replace(/:/g, '-'))}.json`,
    JSON.stringify(data, null, 2)
  );
};
