export type TemperatureUnit = "C" | "F" | "K";

export const convertTemperature = (
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit,
): number => {
  if (isNaN(value)) return 0;

  let result = value;

  let celsius = value;

  if (from === "F") {
    celsius = (value - 32) * (5 / 9);
  } else if (from === "K") {
    celsius = value - 273.15;
  }

  if (to === "C") {
    result = celsius;
  } else if (to === "F") {
    result = (celsius * 9) / 5 + 32;
  } else if (to === "K") {
    result = celsius + 273.15;
  }

  return result;
};
