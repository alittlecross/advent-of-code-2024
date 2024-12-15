import { left, right } from "./0.js";

const answer = left.reduce(
  (a, c) => a + c * right.filter((e) => c === e).length,
  0,
);

console.log(answer);
