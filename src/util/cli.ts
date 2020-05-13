import { QimenType, isQimenType } from '../types';

interface CliParameter {
  type: QimenType;
  start: Date;
  finish: Date;
  options: CliOption;
}

interface CliOption {
  // Process only missing records
  missing: boolean;
  ignoreEs: boolean;
}

export const getCliOption = (): CliParameter => {
  const args = process.argv.filter((_, idx) => idx >= 2).filter((val) => !val.startsWith('--'));
  const options = parseOptions(process.argv.filter((a) => a.startsWith('--')));

  return {
    type: args[0] as QimenType,
    start: new Date(args[1]),
    finish: new Date(args[2]),
    options,
  };
};

export const validateCli = ({ type, start, finish }: CliParameter) =>
  isQimenType(type) && !isNaN(start.getTime()) && !isNaN(finish.getTime());

function parseOptions(options: string[]): CliOption {
  return {
    missing: options.indexOf('--missing') > -1,
    ignoreEs: options.indexOf('--ignore-es') > -1,
  };
}
