const { circularPrimes } = require("./035-circular-primes");

describe("Circular primes", () => {
  test("should return", () => {
    expect(circularPrimes(100)).toBeTruthy();
  });
  test("100 should return a number 13", () => {
    expect(circularPrimes(100)).toBe(13);
  });
  test("100000 should return a number 43", () => {
    expect(circularPrimes(100000)).toBe(43);
  });
  test("250000 should return a number 45", () => {
    expect(circularPrimes(250000)).toBe(45);
  });
  test("500000 should return a number 49", () => {
    expect(circularPrimes(500000)).toBe(49);
  });
  test("750000 should return a number 49", () => {
    expect(circularPrimes(750000)).toBe(49);
  });
  test("1000000 should return a number 55", () => {
    expect(circularPrimes(1000000)).toBe(55);
  });
});
