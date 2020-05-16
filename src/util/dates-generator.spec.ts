import datesGenerator from './dates-generator';
import { QimenType } from '../constants/qimen-type';

describe('Generates list of dates based on given start and finish dates', () => {
  it(`should generates all dates with the gap of 2 hours if given type is 'hour'`, () => {
    const start = new Date('2020-01-31T21:00:00');
    const finish = new Date('2020-02-01T05:00:00');

    const dates = datesGenerator('hour', start, finish);

    expect(dates.length).toBe(5);
    expect(dates[0]).toEqual(new Date('2020-01-31T21:00:00'));
    expect(dates[1]).toEqual(new Date('2020-01-31T23:00:00'));
    expect(dates[2]).toEqual(new Date('2020-02-01T01:00:00'));
    expect(dates[3]).toEqual(new Date('2020-02-01T03:00:00'));
    expect(dates[4]).toEqual(new Date('2020-02-01T05:00:00'));
  });

  it(`should normalise start and finish hour to odd hour if given type is 'hour'`, () => {
    const start = new Date('2020-01-31T22:00:00');
    const finish = new Date('2020-02-01T02:00:00');

    const dates = datesGenerator('hour', start, finish);

    expect(dates.length).toBe(3);
    expect(dates[0]).toEqual(new Date('2020-01-31T21:00:00'));
    expect(dates[1]).toEqual(new Date('2020-01-31T23:00:00'));
    expect(dates[2]).toEqual(new Date('2020-02-01T01:00:00'));
  });

  it(`should generates all dates with the gap of 1 day if given type is 'day'`, () => {
    const start = new Date('2020-02-27');
    const finish = new Date('2020-03-02');

    const dates = datesGenerator('day', start, finish);

    expect(dates.length).toBe(5);
    expect(dates[0]).toEqual(new Date('2020-02-27T01:00:00'));
    expect(dates[1]).toEqual(new Date('2020-02-28T01:00:00'));
    expect(dates[2]).toEqual(new Date('2020-02-29T01:00:00'));
    expect(dates[3]).toEqual(new Date('2020-03-01T01:00:00'));
    expect(dates[4]).toEqual(new Date('2020-03-02T01:00:00'));
  });

  it(`should generates all dates with the gap of 1 month if given type is 'month'`, () => {
    const start = new Date('2020-11');
    const finish = new Date('2021-03');

    const dates = datesGenerator('month', start, finish);

    expect(dates.length).toBe(5);
    expect(dates[0]).toEqual(new Date('2020-11-15T01:00:00'));
    expect(dates[1]).toEqual(new Date('2020-12-15T01:00:00'));
    expect(dates[2]).toEqual(new Date('2021-01-15T01:00:00'));
    expect(dates[3]).toEqual(new Date('2021-02-15T01:00:00'));
    expect(dates[4]).toEqual(new Date('2021-03-15T01:00:00'));
  });

  it(`should generates all dates with the gap of 1 year if given type is 'year'`, () => {
    const start = new Date('2020');
    const finish = new Date('2025');

    const dates = datesGenerator('year', start, finish);

    expect(dates.length).toBe(6);
    expect(dates[0]).toEqual(new Date('2020-02-10T01:00:00'));
    expect(dates[1]).toEqual(new Date('2021-02-10T01:00:00'));
    expect(dates[2]).toEqual(new Date('2022-02-10T01:00:00'));
    expect(dates[3]).toEqual(new Date('2023-02-10T01:00:00'));
    expect(dates[4]).toEqual(new Date('2024-02-10T01:00:00'));
    expect(dates[5]).toEqual(new Date('2025-02-10T01:00:00'));
  });
});
