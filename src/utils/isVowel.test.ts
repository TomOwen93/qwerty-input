import { isVowel } from "./isVowel";

test("isVowel recognises vowels of any case", () => {
  expect(isVowel("a")).toBe(true);
  expect(isVowel("b")).toBe(false);
  expect(isVowel("C")).toBe(false);
  expect(isVowel("d")).toBe(false);
  expect(isVowel("E")).toBe(true);
});
