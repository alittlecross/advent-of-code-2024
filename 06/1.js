import { _col, _row, cols, directions, input, rows } from "./0.js";

const visited = new Set();

let col = _col;
let direction = 0;
let loop = true;
let row = _row;

while (true) {
  visited.add(`${row},${col}`);

  const nextRow = row + directions[direction].offsetRow;
  const nextCol = col + directions[direction].offsetCol;

  if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
    break;
  } else if (input[nextRow][nextCol] === "#") {
    direction = (direction + 1) % 4;
  } else {
    row = nextRow;
    col = nextCol;
  }
}

export { visited };

const answer = visited.size;

console.log(answer);
