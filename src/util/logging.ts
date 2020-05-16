import format from 'date-fns/format';
import fs from 'fs';
import { QimenType } from '../types';
import { getTypeDateFormat } from '../constants/constants';

const LOG_PATH = './logs';

export const initLogPath = () => {
  const options = {
    recursive: true,
  };
  return new Promise((resolve) => {
    fs.mkdir(`${LOG_PATH}`, options, () => resolve());
  });
};

export const logCrawling = (type: QimenType, date: Date): void => {
  fs.appendFileSync(`${LOG_PATH}/unprocessed-${type}.log`, `${format(date, getTypeDateFormat(type))}\n`);
};

export const logIndexing = (type: QimenType, message: string): void => {
  fs.appendFileSync(`${LOG_PATH}/unindexed-${type}.log`, `${message}\n`);
};

export const clog = (...message: any[]) => {
  const dateFormat = 'yyyy-MM-dd HH:mm:ss.SSS';
  const formatted = message.map((m) => (m instanceof Date ? format(m, dateFormat) : m));

  console.log(`[${format(new Date(), dateFormat)}]`, ...formatted);
};
