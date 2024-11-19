import { stringCalculator } from "../utils/string-calculator"
import { describe, it, expect } from 'vitest';

describe("StringCalculator", () => {
  it("should return 0 when empty string is passed", () => {
    expect(stringCalculator("")).toBe(0);
  });
  it("should return the number when a single number is passed", () => {
    expect(stringCalculator("1")).toBe(1);
  });
  it("should return the sum of two numbers when two numbers are passed", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });
  it("should return the sum of multiple numbers when multiple numbers are passed", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
  });
  it("should return the sum of multiple numbers when multiple numbers are passed with new lines as delimiters", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });
});