import { sum, sum2 } from "./sum";

export const randomSum = () => {
  const a = Math.ceil(Math.random() * 100);
  const b = Math.ceil(Math.random() * 100);
  const ret = sum(a, b);
  return ret;
};
