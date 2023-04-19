function containsDuplicate(nums) {
  const numSet = {};

  for (const num of nums) {
    if (numSet[num]) return true;

    numSet[num] = 1;
  }

  return false;
}
