import fs from 'fs';
import { QimenType } from '../types';

export const LOG_PATH = './logs';

export const log = (type: QimenType, message: string): void => {
  fs.appendFileSync(`${LOG_PATH}/unprocessed-${type}.log`, `${message}\n`);
};