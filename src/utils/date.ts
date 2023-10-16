import { format, getHours } from "date-fns";

export function convertUnixDate(unixDate: number) {
  const date = new Date(unixDate * 1000);

  const hours = getHours(date);
  const amPm = hours < 12 ? "오전" : "오후";
  const formattedHours = hours % 12 || 12; // 시간을 12시간 형식으로 표시

  return `${format(date, "yyyy/MM/dd")} ${amPm} ${formattedHours}:${format(date, "mm")}`;
}
