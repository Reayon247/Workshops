// app.test.js
import { test, expect, describe } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

describe("find max value tests", function () {
  test("of 3,7,2,8,5", function () {
    expect(findMaxValue([3, 7, 2, 8, 5])).toBe(8);
  });
  test("of ", function () {
    expect(findMaxValue([])).toBe(null);
  });
  test("of -10,-5,-1", function () {
    expect(findMaxValue([-10, -5, -1])).toBe(-1);
  });
  test("of a string", function () {
    expect(findMaxValue("not an array")).toBe(null);
  });
});

describe("calculate the factorial of the number", function () {
  test("of 5", function () {
    expect(factorial(5)).toBe(120);
  });
  test("of 0", function () {
    expect(factorial(0)).toBe(1);
  });
  test("of -3", function () {
    expect(factorial(-3)).toBe(null);
  });
  test("of string", function () {
    expect(factorial("5")).toBe(null);
  });
});

describe("check if arrays are equal", function () {
  test("checks if the arrays 123 and 123 are equal", function () {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("checks if the arrays 123 and 321 are equal", function () {
    expect(areArraysEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });
  test("checks if the arrays null and null are equal", function () {
    expect(areArraysEqual([], [])).toBe(true);
  });
  test("checks if the arrays 123 and 12 are equal", function () {
    expect(areArraysEqual([1, 2, 3], [1, 2])).toBe(false);
  });
});

describe("convert a string to title case", function () {
  test("hello world", function () {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  test("JAVASCRIPT IS FUN", function () {
    expect(toTitleCase("JAVASCRIPT IS FUN")).toBe("Javascript Is Fun");
  });
  test("123 testing titles", function () {
    expect(toTitleCase("123 testing titles")).toBe("123 Testing Titles");
  });
  test("12345", function () {
    expect(toTitleCase("12345")).toBe("12345");
  });
});
