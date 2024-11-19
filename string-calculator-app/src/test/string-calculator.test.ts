import { stringCalculator } from "../utils/string-calculator"
import { describe, it, expect } from 'vitest';

describe("StringCalculator", () => {
  it("should return 0 when empty string is passed", () => {
    expect(stringCalculator("")).toBe(0);
  });
  it("should return the number when a single number is passed", () => {
    expect(stringCalculator("1")).toBe(1);
  });
});