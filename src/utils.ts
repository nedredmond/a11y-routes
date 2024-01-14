export const parseNum = (num: string) => num.split(".").pop()!;

export const parse = (segment: string) => {
  if (segment.includes(".") || !isNaN(Number(segment))) {
    return parseNum(segment);
  }
  return segment;
};
