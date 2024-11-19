import { stringCalculator } from "../utils/string-calculator"
import { describe, it, expect } from 'vitest';

describe("StringCalculator", () => {
  it("should return 0 when empty string is passed", () => {
    expect(stringCalculator("")).toBe(0);
  });
});