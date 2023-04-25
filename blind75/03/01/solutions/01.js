function maxProfit(prices) {
  let iLeft = 0,
    iRight = iLeft + 1,
    maxProfit = 0;

  while (iRight < prices.length) {
    if (prices[iLeft] < prices[iRight]) {
      maxProfit = Math.max(maxProfit, prices[iRight] - prices[iLeft]);
    } else {
      // Why does it move `iLeft` directly to `iRight` instead of increasing just one index?
      // : Because we are shifting `iRight` to the right while fixing `iLeft`, all prices between `iLeft` and `iRight` are greater than or equal to the price at index iLeft.
      iLeft = iRight;
    }

    iRight++;
  }

  return maxProfit;
}
