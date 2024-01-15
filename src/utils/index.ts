export const parse = (segment: string) => {
  if (segment.includes(".") || !isNaN(Number(segment))) {
    // return last segment of a number
    // e.g., "1.2.3" -> "3"
    return segment.split(".").pop() as string;
  }
  if (segment.includes(":")) {
    // return last segment of a colon-separated string
    // e.g., "WCAG2:robust" -> "robust"
    return segment.split(":").pop() as string;
  }
  return segment;
};
