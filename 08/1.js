import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .split("\n")
  .map((e) => e.split(""));

const rl = input.length;
const cl = input[0].length;

const antennae = {};

input.forEach((e, r) => {
  e.forEach((e, c) => {
    if (/\w/.test(e)) {
      if (!antennae[e]) {
        antennae[e] = [];
      }

      antennae[e].push([r, c]);
    }
  });
});

const pairs = [];

Object.values(antennae).forEach((e) => {
  for (var i = 0; i < e.length; i++) {
    for (var j = i + 1; j < e.length; j++) {
      pairs.push([e[i], e[j]]);
    }
  }
});

const antinodes = new Set();

pairs.forEach((e) => {
  const d = [e[0][0] - e[1][0], e[0][1] - e[1][1]];

  const r0 = e[0][0] + d[0];
  const c0 = e[0][1] + d[1];

  if (r0 >= 0 && c0 >= 0 && r0 < rl && c0 < cl) {
    antinodes.add(`[${r0}, ${c0}]`);
  }

  const r4 = e[1][0] - d[0];
  const c4 = e[1][1] - d[1];

  if (r4 >= 0 && c4 >= 0 && r4 < rl && c4 < cl) {
    antinodes.add(`[${r4}, ${c4}]`);
  }
});

console.log(antinodes.size);
