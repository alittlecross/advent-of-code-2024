import fs from "fs";
import path from "path";

const isSafe = (e) => {
  const diffs = [];

  for (let i = 1; i < e.length; i++) {
    diffs.push(e[i] - e[i - 1]);
  }

  return (
    diffs.every((d) => d >= 1 && d <= 3) ||
    diffs.every((d) => d <= -1 && d >= -3)
  );
};

export default () =>
  fs
    .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
    .split("\n")
    .map((e) => e.split(/\s+/).map((e) => +e))
    .map((e) => {
      let safe = true;
      let madeSafe = true;

      safe = isSafe(e);

      if (!safe) {
        for (let i = 0; i < e.length; i++) {
          const removed = [...e.slice(0, i), ...e.slice(i + 1)];

          madeSafe = isSafe(removed);

          if (madeSafe) {
            break;
          }
        }
      }

      return {
        safe,
        madeSafe,
      };
    });
