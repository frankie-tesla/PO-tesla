export const numberset = (number: number | undefined) => {
  return number?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
