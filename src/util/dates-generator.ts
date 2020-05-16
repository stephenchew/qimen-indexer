import addDays from 'date-fns/addDays';
import addHours from 'date-fns/addHours';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import { QimenType } from '../types';

/**
 * Generate a list of dates. Both start and finish date are inclusive.
 */
export default (type: QimenType, start: Date, finish: Date) => {
  let add;
  let increment: number;
  let normalisedStart: Date;
  let normalisedFinish: Date;

  switch (type) {
    case 'destiny':
    case 'hour':
      add = addHours;
      increment = 2;

      // reset minutes and seconds, make hour odd number
      normalisedStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours());
      if (normalisedStart.getHours() % 2 == 0) {
        normalisedStart = addHours(normalisedStart, -1);
      }
      normalisedFinish = new Date(finish.getFullYear(), finish.getMonth(), finish.getDate(), finish.getHours());
      if (normalisedFinish.getHours() % 2 == 0) {
        normalisedFinish = addHours(normalisedFinish, -1);
      }
      break;
    case 'day':
      add = addDays;
      increment = 1;
      normalisedStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 1);
      normalisedFinish = new Date(finish.getFullYear(), finish.getMonth(), finish.getDate(), 1);
      break;
    case 'month':
      add = addMonths;
      increment = 1;
      normalisedStart = new Date(start.getFullYear(), start.getMonth(), 15, 1);
      normalisedFinish = new Date(finish.getFullYear(), finish.getMonth(), 15, 1);
      break;
    case 'year':
      add = addYears;
      increment = 1;
      normalisedStart = new Date(start.getFullYear(), 1, 10, 1);
      normalisedFinish = new Date(finish.getFullYear(), 1, 10, 1);
      break;
  }
  const dates = [];

  for (let d = normalisedStart; d.getTime() <= normalisedFinish.getTime(); d = add(d, increment)) {
    dates.push(d);
  }

  return dates;
};
