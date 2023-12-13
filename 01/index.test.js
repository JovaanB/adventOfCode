import { calculCalibration, calculCalibrationWithLetters } from ".";

describe('calculCalibration', () => {
  test("Should calculCalibration when inputs are 1abc2, pqr3stu8vwx, a1b2c3d4e5f, treb7uchet returns 142", () => {
    const inputs = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const expected = 142;
    const result = calculCalibration(inputs);
    expect(result).toEqual(expected);
  });

  test("Should calculCalibration when inputs are 1abc3, pqr3stuvwx, treb17uchet returns 63", () => {
    const inputs = ["1abc3", "pqr3stuvwx", "treb17uchet"];
    const expected = 63;
    const result = calculCalibration(inputs);
    expect(result).toEqual(expected);
  });

  test("Should calculCalibration when inputs are abc, stuvwx, trebuchet returns 0", () => {
    const inputs = ["abc", "stuvwx", "trebuchet"];
    const expected = 0;
    const result = calculCalibration(inputs);
    expect(result).toEqual(expected);
  });
});

describe("calculCalibrationWithLetters", () => {
  test("Should calculCalibrationWithLetters when inputs are two1nine, eightwothree, abcone2threexyz, xtwone3four, 4nineeightseven2, zoneight234, 7pqrstsixteen returns 281", () => {
    const inputs = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"];
    const expected = 281;
    const result = calculCalibrationWithLetters(inputs);
    expect(result).toEqual(expected);
  });
});

