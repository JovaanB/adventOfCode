import { calculCalibration } from "./index";

describe('calculCalibration', () => {
  test("Should calculCalibration with 142 when inputs are 1abc2, pqr3stu8vwx, a1b2c3d4e5f, treb7uchet returns 142", () => {
    const inputs = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const expected = 142;
    const result = calculCalibration(inputs);
    expect(result).toEqual(expected);
  })
});