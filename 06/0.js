import fs from "fs";
import path from "path";

export const input = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .split("\n")
  .map((e) => e.split(""));

export const cols = input[0].length;

export const directions = [
  {
    offsetRow: -1,
    offsetCol: 0,
  },
  {
    offsetRow: 0,
    offsetCol: 1,
  },
  {
    offsetRow: 1,
    offsetCol: 0,
  },
  {
    offsetRow: 0,
    offsetCol: -1,
  },
];

export const rows = input.length;

export let _col, _row;

input.forEach((e, r) => {
  e.forEach((e, c) => {
    if (e === "^") {
      _col = c;
      _row = r;
    }
  });
});
