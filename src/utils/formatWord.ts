export const formatWord = (
  value: number,
  words: [string, string, string]
): string => {
  const abs = Math.abs(value) % 100;
  const num = abs % 10;

  if (abs > 10 && abs < 20) {
    return words[2];
  }

  if (num > 1 && num < 5) {
    return words[1];
  }

  if (num === 1) {
    return words[0];
  }

  return words[2];
};
