import { QimenType } from '../types';

export const getTypeValue = (() => {
  const TYPE_VALUE = new Map<QimenType, string>([
    ['destiny', '12'],
    ['year', '07'],
    ['month', '08'],
    ['day', '09'],
    ['hour', '10'],
  ]);

  return (type: QimenType) => TYPE_VALUE.get(type);
})();

export const YIN_YANG = ['yin', 'yang'];
export const DIRECTIONS = [
  'southeast',
  'south',
  'southwest',
  'east',
  'centre',
  'west',
  'northeast',
  'north',
  'northwest',
];
