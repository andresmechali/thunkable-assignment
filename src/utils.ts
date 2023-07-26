import { format } from "date-fns";

/**
 * Takes a timestamp and returns the date in the format that the application requires.
 * @param timestamp
 */
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return format(date, "MMM dd, yyyy \xa0 KK:mmaaa");
};

/**
 * Takes a list of projects and returns a new array with the changed order for Drag and Drop to consume.
 * @param list
 * @param startIndex
 * @param endIndex
 */
export const reorder = (
  list: ProjectType[],
  startIndex: number,
  endIndex: number,
): ProjectType[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
