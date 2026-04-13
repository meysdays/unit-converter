export const LENGTH_UNITS = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
} as const;

export type LengthUnit = keyof typeof LENGTH_UNITS;

export const convertLength = (
  value: number,
  from: LengthUnit,
  to: LengthUnit
): number => {
  if (isNaN(value)) return 0;

  const baseValue = value * LENGTH_UNITS[from];
  return baseValue / LENGTH_UNITS[to];
};