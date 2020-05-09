import format from 'date-fns/format';
import fs from 'fs';
import rp from 'request-promise-native';
import { Chart, QimenType } from './types';
import { getTypeDateFormat } from './util/constants';

export const CHART_PATH = './charts';

export const initChartPaths = () => {
  const options = {
    recursive: true,
  };

  const paths = ['year', 'month', 'day', 'hour'];

  return Promise.all([
    paths.map((path) => {
      new Promise((resolve) => {
        fs.mkdir(`${CHART_PATH}/${path}`, options, resolve);
      });
    }),
  ]);
};

export const saveToFile = (type: QimenType, date: Date, data: Chart) => {
  fs.writeFileSync(
    `${CHART_PATH}/${type}/${format(date, getNormalisedDateFormat(type))}.json`,
    JSON.stringify(data, null, 2)
  );
};

export const indexToEs = async (type: QimenType, date: Date, data: Chart) => {
  const id = format(date, getNormalisedDateFormat(type));
  const options = {
    uri: `http://localhost:9222/${type}/_doc/${id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return rp(options).promise();
};

export function getNormalisedDateFormat(type: QimenType) {
  return getTypeDateFormat(type).replace(/\s/g, `'T'`).replace(/:/g, '-');
}
