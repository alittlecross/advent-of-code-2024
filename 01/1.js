import { left, right } from "./0.js";

const answer = left
  .map((e, i) => Math.abs(e - right[i]))
  .reduce((a, c) => a + c);

console.log(answer);
