import { hasCase, hasSpecialCase } from "./isInputStrong";
import isInputStrong from "./isInputStrong";

test("isInputStrong identifies whether a string has strong input elements", () => {
  expect(isInputStrong("Qwerty12£!")).toBe(true);
  expect(isInputStrong("hEll!")).toBe(false);
  expect(isInputStrong("HELLOer!")).toBe(true);
  expect(isInputStrong("RhYtHm1")).toBe(false);
});

test.skip("hasCase will check if a string has an element of the specific case (upper or lower)", () => {
  expect(hasCase("test")).toBe(false);
  expect(hasCase("test")).toBe(true);
  expect(hasCase("TeST")).toBe(true);
  expect(hasCase("tesTINGLOl")).toBe(true);
  expect(hasCase("tesT")).toBe(true);
});

test.skip("hasSpecialCase will check if specific special characters are in the string", () => {
  expect(hasSpecialCase("tony!")).toBe(true);
  expect(hasSpecialCase("tony")).toBe(false);
});
