import { _col, _row, cols, directions, input, rows } from "./0.js";
import { visited } from "./1.js";

const obstacles = new Set();

[...visited]
  .map((e) => e.split(",").map((e) => +e))
  .forEach((e, i, a) => {
    if (i) {
      const visited = new Set();

      let col = _col;
      let direction = 0;
      let loop = true;
      let row = _row;

      while (true) {
        const value = `${row},${col},${direction}`;

        if (visited.has(value)) {
          obstacles.add(e);

          break;
        } else {
          visited.add(value);

          const nextRow = row + directions[direction].offsetRow;
          const nextCol = col + directions[direction].offsetCol;

          if (
            nextRow < 0 ||
            nextRow >= rows ||
            nextCol < 0 ||
            nextCol >= cols
          ) {
            break;
          } else if (
            input[nextRow][nextCol] === "#" ||
            (e[0] === nextRow && e[1] === nextCol)
          ) {
            direction = (direction + 1) % 4;
          } else {
            row = nextRow;
            col = nextCol;
          }
        }
      }
    }
  });

const answer = obstacles.size;

console.log(answer);
