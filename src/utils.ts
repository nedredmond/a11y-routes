export const parseId = (handle: string) => handle.split(":")[1];

export const parseNum = (num: string) => num.split(".").pop()!;

export const parse = (segment: string) => {
  if (segment.startsWith("WCAG2")) {
    return parseId(segment);
  }
  if (segment.includes(".") || !isNaN(Number(segment))) {
    return parseNum(segment);
  }
};
