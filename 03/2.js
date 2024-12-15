import input, { process } from "./0.js";

const answer = process(
  input.replace(/don't\(\)((.|\n)*?)do\(\)/g, "").split("don't()")[0],
);

console.log(answer);
