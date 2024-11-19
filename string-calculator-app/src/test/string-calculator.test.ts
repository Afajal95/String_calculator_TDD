import { StringCalculator } from "../utils/string-calculator"
import { describe, it, expect } from 'vitest';

describe("StringCalculator", () => {
  it("should return 0 when empty string is passed", () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.calculate("")).toBe(0);
  });
});