import { QimenType } from '../types';

export const getTypeValue = (() => {
  const TYPE_VALUE = new Map<QimenType, string>([
    ['destiny', '12'],
    ['year', '07'],
    ['month', '08'],
    ['day', '09'],
    ['hour', '10'],
  ]);

  return (type: QimenType) => TYPE_VALUE.get(type) ?? '';
})();

export const getTypeDateFormat = (() => {
  const TYPE_VALUE = new Map<QimenType, string>([
    ['destiny', 'yyyy-MM-dd HH:mm:ss'],
    ['year', 'yyyy'],
    ['month', 'yyyy-MM'],
    ['day', 'yyyy-MM-dd'],
    ['hour', 'yyyy-MM-dd HH:mm:ss'],
  ]);

  return (type: QimenType) => TYPE_VALUE.get(type) ?? '';
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
