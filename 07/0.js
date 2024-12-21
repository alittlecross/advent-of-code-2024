import fs from "fs";
import path from "path";

const cache = {};

const combinations = (base, length) => {
  if (!cache[length]) {
    cache[length] = Array(Math.pow(base, length - 1))
      .fill(0)
      .map((_, i) => i.toString(base).padStart(length - 1, 0))
      .map((e) => e.split("").map((e) => +e));
  }

  return cache[length];
};

const input = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .split("\n")
  .map((e) => {
    const [left, right] = e.split(":");

    return {
      expected: +left,
      ints: right
        .trim()
        .split(" ")
        .map((e) => +e),
    };
  });

const operators = [(a, b) => a + b, (a, b) => a * b, (a, b) => +`${a}${b}`];

export default (base) =>
  input
    .filter(({ ints, expected }) =>
      combinations(base, ints.length).some((e) => {
        let actual = 0;

        for (let i = 0; i < ints.length; i++) {
          if (i) {
            actual = operators[e[i - 1]](actual, ints[i]);
          } else {
            actual = ints[i];
          }
        }

        return actual === expected;
      }),
    )
    .reduce((a, c) => a + c.expected, 0);
