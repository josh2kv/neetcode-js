for (let i = 0; i < 9; i++) {
  let row = new Set(),
    col = new Set(),
    box = new Set();

  for (let j = 0; j < 9; j++) {
    const rowEl = board[i][j];
    const colEl = board[j][i];
    const boxEl =
      board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

    if (rowEl !== '.') {
      if (row.has(rowEl)) return false;
      row.add(rowEl);
    }
    if (colEl !== '.') {
      if (col.has(colEl)) return false;
      col.add(colEl);
    }

    if (boxEl !== '.') {
      if (box.has(boxEl)) return false;
      box.add(boxEl);
    }
  }
}
return true;
