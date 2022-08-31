import { sum, sum2 } from "../src/sum";

test("test", () => {
  expect(sum(1, 2)).toBe(3);
});

test("test2", () => {
  expect(sum2(1, 2, 3)).toBe(6);
});
