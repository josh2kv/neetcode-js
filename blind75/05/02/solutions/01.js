function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  let [low, high] = [0, matrix.length - 1];

  while (low < high) {
    const mid = low + Math.floor((high + low) / 2);

    if (matrix[mid][0] === target) return true;

    if (matrix[mid][0] > target) {
      high = mid - 1;
      continue;
    }

    if (matrix[mid][0] < target) {
      low = mid + 1;

      continue;
    }
  }

  const row = low;
  [low, high] = [0, matrix[row].length - 1];

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    if (matrix[row][mid] === target) return true;

    if (matrix[row][mid] > target) {
      high = mid - 1;
      continue;
    }

    if (matrix[row][mid] < target) {
      low = mid + 1;
      continue;
    }
  }

  return false;
}
