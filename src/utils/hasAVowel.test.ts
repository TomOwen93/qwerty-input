import { hasAVowel } from "./hasAVowel";

test("hasAVowel identifies whether a string has a vowel in any case", () => {
  expect(hasAVowel("hello")).toBe(true);
  expect(hasAVowel("hll")).toBe(false);
  expect(hasAVowel("HELLO")).toBe(true);
  expect(hasAVowel("RhYtHm")).toBe(false);
});
