import { format } from "date-fns";

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, "MMM dd, yyyy \xa0 KK:mmaaa");
}