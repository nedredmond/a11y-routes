export const parseNum = (num: string) => num.split(".").pop() as string;

export const parse = (segment: string) => {
  if (segment.includes(".") || !isNaN(Number(segment))) {
    return parseNum(segment);
  }
  return segment;
};
