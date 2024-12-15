import fs from "fs";
import path from "path";

export const process = (string) =>
  string
    .match(/mul\(\d*,\d*\)/g)
    .map((e) =>
      e
        .replace(/(mul\(|\))/g, "")
        .split(",")
        .reduce((a, c) => a * c, 1),
    )
    .reduce((a, c) => a + c);

export default fs.readFileSync(
  path.join(import.meta.dirname, "input.txt"),
  "utf8",
);
