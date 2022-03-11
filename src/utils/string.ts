export const space2Hyphen = (str: string): string => str.replace(/\s/g, "-");

export const removeSpecialSymbols = (str: string): string =>
  str.replace(/[^ㄱ-힣a-zA-Z0-9-\s]+/g, "");
