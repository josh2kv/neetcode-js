/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
const TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  this.map[key] = this.map[key] || [];
  this.map[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const bucket = this.map[key] || [];
  let value = '';
  let [left, right] = [0, bucket.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const [guessValue, guessTimestamp] = bucket[mid];

    if (guessTimestamp === timestamp) return guessValue;

    if (guessTimestamp < timestamp) {
      left = mid + 1;
      value = guessValue;
      continue;
    }

    right = mid - 1;
  }

  return value;
};
