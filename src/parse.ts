import cheerio from 'cheerio';
import { Chart, QimenType } from './types';
import * as Constants from './util/constants';
import * as ConstantsZhTw from './util/constants-zh-tw';

const cheerioOptions = {
  decodeEntities: false,
};

export default (type: QimenType, date: Date, body: string): Chart => {
  const $ = cheerio.load(body, cheerioOptions);

  const baziString = $('.四柱').text();

  const metaParent = $('.tdB').eq(1);
  const meta = $('.tdW', metaParent);
  const formationString = $('.tdW', metaParent).eq(6).text();
  const combination = $('.tdW', metaParent).eq(8).text();

  const [formationYinyang, formationNumber] = parseFormation(formationString);
  const skyHorse = $('.空:contains("馬")').parents('td.九宮').first().find('td').first().text()?.[0];

  const palaces = $('td.九宮')
    .toArray()
    .map((palace, idx) => {
      const $palace = $(palace);

      const direction = Constants.DIRECTIONS[idx];
      const heavenStem = $palace.find('.九宮-2').text().replace('遁', '').trim();
      const star = $palace.find('.折行').eq(0).text();
      const deity = $palace.find('.折行').eq(1).text();
      const door = $palace.find('.八門').first().text();
      const flyingStar = parseInt(
        // some smart ass uses unicode number
        String.fromCharCode($palace.find('.九數').first().text().charCodeAt(0) - 65248),
        10
      );
      const isEmpty = $('.空:contains("空")', $palace).length > 0;
      const earthStem = $palace.find('.天干').first().text();

      const combination = $('.格局', $palace)
        .find('td')
        .not('.天干')
        .not('.九數')
        .toArray()
        .map((combo) => $(combo).text().trim())
        .filter((comboStr) => comboStr !== '');

      return {
        [direction]: [heavenStem, earthStem, star, door, deity],
        [`${direction}-heaven-stem`]: heavenStem,
        [`${direction}-earth-stem`]: earthStem,
        [`${direction}-star`]: star,
        [`${direction}-door`]: door,
        [`${direction}-deity`]: deity,
        [`${direction}-empty`]: isEmpty,
        [`${direction}-flying-star`]: flyingStar,
        [`${direction}-combination`]: combination,
      };
    });

  console.log(palaces);

  return {
    type,
    temporal: date,
    'bazi-year': `${baziString[3]}${baziString[7]}`,
    'bazi-month': `${baziString[2]}${baziString[6]}`,
    'bazi-day': `${baziString[1]}${baziString[5]}`,
    'bazi-hour': `${baziString[0]}${baziString[4]}`,
    'formation-yinyang': formationYinyang,
    'formation-number': formationNumber,
    envoy: meta.eq(1).text(),
    'chief-star': meta.eq(3).text(),
    'jiazi-clan': meta.eq(5).text(),
    season: meta.eq(7).text(),
    combination: combination.split('、'),
    'sky-horse': skyHorse,

    southeast: ['壬', '丁', '天芮', '杜', '值符'],
    'southeast-heaven-stem': '壬',
    'southeast-earth-stem': '丁',
    'southeast-star': '天芮',
    'southeast-door': '杜',
    'southeast-deity': '值符',
    'southeast-empty': false,
    'southeast-flying-star': 4,
    'southeast-combination': ['壬入墓', '相佐', '六仪击刑', '地网'],
    south: ['戊', '庚', '天柱', '景', '腾蛇'],
    'south-heaven-stem': '戊',
    'south-earth-stem': '庚',
    'south-star': '天柱',
    'south-door': '景',
    'south-deity': '腾蛇',
    'south-empty': false,
    'south-flying-star': 9,
    'south-combination': [],
    southwest: ['乙', '壬', '天心', '死', '太阴'],
    'southwest-heaven-stem': '乙',
    'southwest-earth-stem': '壬',
    'southwest-star': '天心',
    'southwest-door': '死',
    'southwest-deity': '太阴',
    'southwest-empty': false,
    'southwest-flying-star': 2,
    'southwest-combination': ['地诈', '权怡'],
    east: ['庚', '癸', '天英', '伤', '九天'],
    'east-heaven-stem': '庚',
    'east-earth-stem': '癸',
    'east-star': '天英',
    'east-door': '伤',
    'east-deity': '九天',
    'east-empty': true,
    'east-flying-star': 3,
    'east-combination': ['大格'],
    centre: ['丙', '天禽'],
    'centre-heaven-stem': '丙',
    'centre-earth-stem': '丙',
    'centre-flying-star': 5,
    west: ['辛', '戊', '天蓬', '惊', '六合'],
    'west-heaven-stem': '辛',
    'west-earth-stem': '戊',
    'west-star': '天蓬',
    'west-door': '惊',
    'west-deity': '六合',
    'west-empty': false,
    'west-flying-star': 7,
    'west-combination': [],
    northeast: ['丁', '己', '天辅', '生', '九地'],
    'northeast-heaven-stem': '丁',
    'northeast-earth-stem': '己',
    'northeast-star': '天辅',
    'northeast-door': '生',
    'northeast-deity': '九地',
    'northeast-empty': true,
    'northeast-flying-star': 8,
    'northeast-combination': ['丁奇墓', '鬼遁', '重诈'],
    north: ['癸', '辛', '天冲', '休', '朱雀'],
    'north-heaven-stem': '癸',
    'north-earth-stem': '辛',
    'north-star': '天冲',
    'north-door': '休',
    'north-deity': '朱雀',
    'north-empty': false,
    'north-flying-star': 1,
    'north-combination': [],
    northwest: ['己', '乙', '天任', '开', '勾陈'],
    'northwest-heaven-stem': '己',
    'northwest-earth-stem': '乙',
    'northwest-star': '天任',
    'northwest-door': '开',
    'northwest-deity': '勾陈',
    'northwest-empty': false,
    'northwest-flying-star': 6,
    'northwest-combination': ['人诈'],
  } as Chart;
};

function parseFormation(formation: string) {
  if (formation.length < 2) {
    return [undefined, undefined];
  }

  return [
    Constants.YIN_YANG[ConstantsZhTw.YIN_YANG.indexOf(formation[0])],
    ConstantsZhTw.NUMBERS.indexOf(formation[1]) + 1,
  ];
}
