import rp from 'request-promise-native';
import { QimenType as Type } from '../types';
import { QimenType } from '../constants/qimen-type';

const SOLAR = 1;

export default (csrf: string, cookies: string) => async (type: Type, date: Date) => {
  const qimen = QimenType.validate(type) ? QimenType[type] : undefined;
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
      'Qimen[type]': qimen?.value,
      'Qimen[en][year]': date.getFullYear(),
      'Qimen[en][month]': date.getMonth() + 1,
      'Qimen[en][day]': date.getDate(),
      'Qimen[en][hour]': date.getHours(),
      'Qimen[en][minute]': date.getMinutes(),
    },
  };

  return rp(options);
};
