import rp from 'request-promise-native';
import { QimenType } from './types';
import { getTypeValue } from './util/constants';

const SOLAR = 1;

export default (csrf: string, cookies: string) => async (type: QimenType, date: Date) => {
  const options = {
    uri: 'http://fengshui-republic.com/qimengeju',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: cookies,
    },
    form: {
      '_csrf-frontend': csrf,
      'Qimen[calendar]': SOLAR,
      'Qimen[type]': getTypeValue(type),
      'Qimen[en][year]': date.getFullYear(),
      'Qimen[en][month]': date.getMonth() + 1,
      'Qimen[en][day]': date.getDate(),
      'Qimen[en][hour]': date.getHours(),
      'Qimen[en][minute]': date.getMinutes(),
    },
  };

  return rp(options);
};
