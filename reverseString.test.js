const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString.toBeDefinded);
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
