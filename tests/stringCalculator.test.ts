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

test("returns sum of multiple comma-separated numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles newline as a delimiter", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("handles different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});