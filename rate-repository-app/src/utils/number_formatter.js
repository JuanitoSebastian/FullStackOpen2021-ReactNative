export const numberFormatter = (number) => {
  if (number < 1000) {
    return String(number);
  }

  const numberString = String(Math.round((number * 0.0001) * 10) / 10);

  return `${numberString}k`;
};