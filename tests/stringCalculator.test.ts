import { add } from "../src/stringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself if one number is given", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two comma-separated numbers", () => {
  expect(add("1,5")).toBe(6);
});