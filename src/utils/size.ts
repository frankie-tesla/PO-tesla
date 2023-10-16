import prettyBytes from "pretty-bytes";

export function getSize(size: number) {
  return prettyBytes(size, { maximumFractionDigits: 2 }).toUpperCase();
}
