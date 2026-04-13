export const WEIGHT_UNITS = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.453592,
} as const;

export type WeightUnit = keyof typeof WEIGHT_UNITS;

export const convertWeight = (
  value: number,
  from: WeightUnit,
  to: WeightUnit
): number => {
  if (isNaN(value)) return 0;

  const baseValue = value * WEIGHT_UNITS[from];

  return baseValue / WEIGHT_UNITS[to];
};