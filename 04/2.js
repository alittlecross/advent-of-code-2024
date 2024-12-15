import input from "./0.js";

let count = 0;

for (let r = 0; r < input.length; r++) {
  for (let c = 0; c < input[r].length; c++) {
    if (input[r][c] === "A") {
      const check = (ne, se, nw, sw) =>
        input[r - 1][c - 1] === ne &&
        input[r - 1][c + 1] === se &&
        input[r + 1][c - 1] === nw &&
        input[r + 1][c + 1] === sw;

      if (
        r > 0 &&
        c > 0 &&
        r + 1 < input.length &&
        c + 1 < input[r].length &&
        (check("M", "M", "S", "S") ||
          check("M", "S", "M", "S") ||
          check("S", "S", "M", "M") ||
          check("S", "M", "S", "M"))
      ) {
        ++count;
      }
    }
  }
}

console.log(count);
