import { addDays, addHours, addMonths, addYears } from 'date-fns';

export interface QimenType {
  type: 'destiny' | 'year' | 'month' | 'day' | 'hour';
  value: string;
  dateFormat: string;
  increment: (date: Date) => Date;
  normalise: (date: Date) => Date;
}

export const QimenType: Record<QimenType['type'], QimenType> & {
  validate: (val: string) => val is QimenType['type'];
} = {
  validate: (val: string): val is QimenType['type'] => val !== 'validate' && Object.keys(QimenType).includes(val),
  destiny: {
    type: 'destiny',
    value: '12',
    dateFormat: 'yyyy-MM-dd HH:mm:ss',
    increment: (date) => addHours(date, 2),
    normalise: (date) => {
      // reset minutes and seconds, make hour odd number
      const normalised = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
      return normalised.getHours() % 2 == 0 ? addHours(normalised, -1) : normalised;
    },
  },
  year: {
    type: 'year',
    value: '07',
    dateFormat: 'yyyy',
    increment: (date) => addYears(date, 1),
    normalise: (date) => new Date(date.getFullYear(), 1, 10, 1),
  },
  month: {
    type: 'month',
    value: '08',
    dateFormat: 'yyyy-MM',
    increment: (date) => addMonths(date, 1),
    normalise: (date) => new Date(date.getFullYear(), date.getMonth(), 15, 1),
  },
  day: {
    type: 'day',
    value: '09',
    dateFormat: 'yyyy-MM-dd',
    increment: (date) => addDays(date, 1),
    normalise: (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 1),
  },
  hour: {
    type: 'hour',
    value: '10',
    dateFormat: 'yyyy-MM-dd HH:mm:ss',
    increment: (date) => addHours(date, 2),
    normalise: (date) => {
      // reset minutes and seconds, make hour odd number
      const normalised = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
      return normalised.getHours() % 2 == 0 ? addHours(normalised, -1) : normalised;
    },
  },
};
