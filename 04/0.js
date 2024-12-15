import fs from "fs";
import path from "path";

export default fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .split("\n")
  .map((e) => e.split(""));
