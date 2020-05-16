import cheerio from 'cheerio';
import { getTypeDateFormat } from '../constants/constants';
import { Chart, QimenType } from '../types';
import format from 'date-fns/format';
import * as Constants from '../constants/constants';
import * as ConstantsZhTw from '../constants/constants-zh-tw';

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

  const palaces = parsePalaces($);

  return {
    type,
    temporal: format(date, getTypeDateFormat(type)),
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
    combination: combination.split('、').filter((val) => val !== '無'),
    'sky-horse': skyHorse,

    ...palaces.reduce((val, curr) => ({ ...val, ...curr }), {}),
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

function parsePalaces($: CheerioStatic) {
  return $('td.九宮')
    .toArray()
    .map((palace, idx) => {
      const $palace = $(palace);
      const direction = Constants.DIRECTIONS[idx];

      const heavenStem = $palace.find('.九宮-2').text().replace('遁', '').trim();
      const star = $palace.find('.折行').eq(0).text();
      const deity = replaceTypo($palace.find('.折行').eq(1).text());
      const door = $palace.find('.八門').first().text();
      const flyingStar = parseInt(
        // some smart ass use unicode number
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
        .map((combo) => replaceTypo($(combo).text().trim()))
        .filter((comboStr) => comboStr !== '');

      const returnVal = {
        [direction]: [heavenStem, earthStem, star, door, deity, flyingStar.toString()],
        [`${direction}-heaven-stem`]: heavenStem,
        [`${direction}-earth-stem`]: earthStem,
        [`${direction}-star`]: star,
        [`${direction}-door`]: door,
        [`${direction}-deity`]: deity,
        [`${direction}-empty`]: isEmpty,
        [`${direction}-flying-star`]: flyingStar,
        [`${direction}-combination`]: combination,
      };

      // clean up structure
      if (direction === 'centre') {
        delete returnVal['centre-door'];
        delete returnVal['centre-star'];
        delete returnVal['centre-deity'];
        delete returnVal['centre-empty'];
        delete returnVal['centre-combination'];
        returnVal['centre'] = [...new Set<string>(returnVal['centre'] as string[])].filter(
          (item: string) =>
            item !== '' &&
            item != '命' &&
            item != '年' &&
            item !== '月' &&
            item !== '日' &&
            item != '時' &&
            !item.startsWith('天')
        );
      }

      return returnVal;
    });
}

function replaceTypo(value: string): string {
  switch (value) {
    case '直符':
      return '值符';
    case '螣蛇':
      return '腾蛇';
    case '螣蛇妖嬌':
      return '騰蛇妖嬌';
    default:
      return value;
  }
}
