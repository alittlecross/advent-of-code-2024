import { pass } from "./0.js";

let sum = 0;

pass.forEach((e) => (sum += e[Math.floor(e.length / 2)]));

console.log(sum);
