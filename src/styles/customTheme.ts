import {
  blue,
  cyan,
  geekblue,
  gold,
  green,
  lime,
  magenta,
  orange,
  purple,
  red,
  volcano,
  yellow,
} from '@/color/colors';
import { mauve, olive, sage, sand, slate } from '@/color/neutrals';

export const primaryColors = {
  blue: blue.dark[9],
  cyan: cyan.dark[9],
  geekblue: geekblue.dark[9],
  gold: gold.dark[9],
  green: green.dark[9],
  lime: lime.dark[9],
  magenta: magenta.dark[9],
  orange: orange.dark[9],
  purple: purple.dark[9],
  red: red.dark[9],
  volcano: volcano.dark[9],
  yellow: yellow.dark[9],
};

export type PrimaryColorsObj = typeof primaryColors;
export type PrimaryColors = keyof PrimaryColorsObj;
export const primaryColorsSwatches = [
  primaryColors.red,
  primaryColors.orange,
  primaryColors.gold,
  primaryColors.yellow,
  primaryColors.lime,
  primaryColors.green,
  primaryColors.cyan,
  primaryColors.blue,
  primaryColors.geekblue,
  primaryColors.purple,
  primaryColors.magenta,
  primaryColors.volcano,
];
export const neutralColors = {
  mauve: mauve.dark[9],
  olive: olive.dark[9],
  sage: sage.dark[9],
  sand: sand.dark[9],
  slate: slate.dark[9],
};
export const neutralColorsSwatches = [
  neutralColors.mauve,
  neutralColors.slate,
  neutralColors.sage,
  neutralColors.olive,
  neutralColors.sand,
];

export type NeutralColorsObj = typeof neutralColors;
export type NeutralColors = keyof NeutralColorsObj;

export const findCustomThemeName = (type: 'primary' | 'neutral', value: string) => {
  const res = type === 'primary' ? primaryColors : neutralColors;
  const result = Object.entries(res).find((item) => item[1] === value);
  return result?.[0];
};
