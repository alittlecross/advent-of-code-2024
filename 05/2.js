import { fail, rules, some } from "./0.js";

let sum = 0;

fail.forEach((e) => {
  e.sort((a, b) => (some([a, b]) ? 1 : -1));

  sum += e[Math.floor(e.length / 2)];
});

console.log(sum);
