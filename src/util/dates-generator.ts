import { QimenType as Type } from '../types';
import { QimenType } from '../constants/qimen-type';

/**
 * Generate a list of dates. Both start and finish date are inclusive.
 */
export default (type: Type, start: Date, finish: Date) => {
  // It can never be false
  const qimen = QimenType.validate(type) ? QimenType[type] : QimenType.year;

  const normalisedStart = qimen.normalise(start);
  const normalisedFinish = qimen.normalise(finish);

  const dates: Date[] = [];

  for (let d = normalisedStart; d.getTime() <= normalisedFinish.getTime(); d = qimen.increment(d)) {
    dates.push(d);
  }

  return dates;
};
