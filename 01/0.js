import fs from "fs";
import path from "path";

export const [left, right] = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .split("\n")
  .map((e) => e.split(/\s+/))
  .reduce(
    (a, c) => {
      a[0].push(+c[0]);
      a[1].push(+c[1]);

      return a;
    },
    [[], []],
  )
  .map((e) => e.sort());
