import input from "./0.js";

let count = 0;

for (let r = 0; r < input.length; r++) {
  for (let c = 0; c < input[r].length; c++) {
    if (input[r][c] === "X") {
      const check = (condition, factorC, factorR) => {
        if (
          condition &&
          input[r + 1 * factorR][c + 1 * factorC] === "M" &&
          input[r + 2 * factorR][c + 2 * factorC] === "A" &&
          input[r + 3 * factorR][c + 3 * factorC] === "S"
        ) {
          ++count;
        }
      };

      check(r > 2, 0, -1);
      check(r > 2 && c + 3 < input[r].length, 1, -1);
      check(c + 3 < input[r].length, 1, 0);
      check(c + 3 < input[r].length && r + 3 < input.length, 1, 1);
      check(r + 3 < input.length, 0, 1);
      check(r + 3 < input.length && c > 2, -1, 1);
      check(c > 2, -1, 0);
      check(c > 2 && r > 2, -1, -1);
    }
  }
}

console.log(count);
