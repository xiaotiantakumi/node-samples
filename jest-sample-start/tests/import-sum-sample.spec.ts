import { randomSum } from "../src/import-sum-sample";
import * as Sum from "../src/sum";
// jest.mock("../src/sum");

// beforeEach(() => {
//   jest.mock("../src/sum");
// });

describe("matching cities to foods", () => {
  // test("mock sum test", () => {
  //   // これでもいい
  //   //const mockSum = Sum as jest.Mocked<typeof Sum>;
  //   const mockSum = jest.mocked(Sum, true);
  //   mockSum.sum.mockReturnValueOnce(2);
  //   expect(randomSum()).toBe(2);
  // });
  test("mock sum spy test", () => {
    const sumSpy = jest.spyOn(Sum, "sum").mockReturnValueOnce(2);
    expect(randomSum()).toBe(2);
  });
  test("execute randomSum test", () => {
    const val = randomSum();
    expect(val).toBeGreaterThanOrEqual(0);
  });
});
