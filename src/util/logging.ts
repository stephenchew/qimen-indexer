import fs from 'fs';
import { QimenType } from '../types';

const LOG_PATH = './logs';

export const initLogPath = () => {
  const options = {
    recursive: true,
  };
  return new Promise((resolve) => {
    fs.mkdir(`${LOG_PATH}`, options, () => resolve());
  });
};

export const logCrawling = (type: QimenType, message: string): void => {
  fs.appendFileSync(`${LOG_PATH}/unprocessed-${type}.log`, `${message}\n`);
};

export const logIndexing = (type: QimenType, message: string): void => {
  fs.appendFileSync(`${LOG_PATH}/unindexed-${type}.log`, `${message}\n`);
};
