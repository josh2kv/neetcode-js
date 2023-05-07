const TimeMap = require('./index');

test('TimeMap is a class', () => {
  expect(typeof TimeMap.prototype.constructor).toEqual('function');
});

describe('Set and Get', () => {
  const timeMap = new TimeMap();
  timeMap.set('foo', 'bar', 1); // store the key "foo" and value "bar" along with timestamp = 1.

  test('sets a new key with a value and timestamp and gets it', () => {
    expect(timeMap.get('foo', 1)).toEqual('bar'); // return "bar"
  });

  test('gets the value by a key and timestamp when the key exists but the timestamp doesnt exist', () => {
    expect(timeMap.get('foo', 3)).toEqual('bar'); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
  });

  timeMap.set('foo', 'bar2', 4); // store the key "foo" and value "bar2" along with timestamp = 4.

  test('sets a new key with another value and timestamp and gets it', () => {
    expect(timeMap.get('foo', 4)).toEqual('bar2'); // return "bar2"
  });

  test('gets the value by a key and a timestamp when the key exists but the timestamp doesnt exist', () => {
    expect(timeMap.get('foo', 5)).toEqual('bar2'); // return "bar2"
  });
});
