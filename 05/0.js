import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .split("\n\n");

export const fail = [];
export const pass = [];

export const rules = input[0]
  .split("\n")
  .map((e) => e.split("|").map((e) => +e));

export const some = (arr) =>
  rules.some((rule) => {
    const left = arr.indexOf(rule[0]);
    const right = arr.indexOf(rule[1]);

    return left >= 0 && right >= 0 && left > right;
  });

input[1]
  .split("\n")
  .map((e) => e.split(",").map((e) => +e))
  .forEach((e) => {
    some(e) ? fail.push(e) : pass.push(e);
  });
