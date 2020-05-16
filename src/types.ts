export type taichi = 'yin' | 'yang';

export type QimenType = 'destiny' | 'year' | 'month' | 'day' | 'hour';

export type Chart = {
  type: QimenType;
  temporal: string;
  'bazi-hour': string | undefined;
  'bazi-month': string | undefined;
  'bazi-day': string | undefined;
  'bazi-year': string;
  'formation-yinyang': string;
  'formation-number': number;
  envoy: string;
  'chief-star': string;
  'jiazi-clan': string;
  season: string;
  combination: string[];
  'sky-horse': string;
  southeast: string[];
  'southeast-heaven-stem': string;
  'southeast-earth-stem': string;
  'southeast-star': string;
  'southeast-door': string;
  'southeast-deity': string;
  'southeast-empty': boolean;
  'southeast-flying-star': number;
  'southeast-combination': string[];
  south: string[];
  'south-heaven-stem': string;
  'south-earth-stem': string;
  'south-star': string;
  'south-door': string;
  'south-deity': string;
  'south-empty': boolean;
  'south-flying-star': number;
  'south-combination': string[];
  southwest: string[];
  'southwest-heaven-stem': string;
  'southwest-earth-stem': string;
  'southwest-star': string;
  'southwest-door': string;
  'southwest-deity': string;
  'southwest-empty': boolean;
  'southwest-flying-star': number;
  'southwest-combination': string[];
  east: string[];
  'east-heaven-stem': string;
  'east-earth-stem': string;
  'east-star': string;
  'east-door': string;
  'east-deity': string;
  'east-empty': boolean;
  'east-flying-star': number;
  'east-combination': string[];
  centre: string[];
  'centre-heaven-stem': string;
  'centre-earth-stem': string;
  'centre-flying-star': number;
  west: string[];
  'west-heaven-stem': string;
  'west-earth-stem': string;
  'west-star': string;
  'west-door': string;
  'west-deity': string;
  'west-empty': boolean;
  'west-flying-star': number;
  'west-combination': string[];
  northeast: string[];
  'northeast-heaven-stem': string;
  'northeast-earth-stem': string;
  'northeast-star': string;
  'northeast-door': string;
  'northeast-deity': string;
  'northeast-empty': boolean;
  'northeast-flying-star': number;
  'northeast-combination': string[];
  north: string[];
  'north-heaven-stem': string;
  'north-earth-stem': string;
  'north-star': string;
  'north-door': string;
  'north-deity': string;
  'north-empty': boolean;
  'north-flying-star': number;
  'north-combination': string[];
  northwest: string[];
  'northwest-heaven-stem': string;
  'northwest-earth-stem': string;
  'northwest-star': string;
  'northwest-door': string;
  'northwest-deity': string;
  'northwest-empty': boolean;
  'northwest-flying-star': number;
  'northwest-combination': string[];
};
