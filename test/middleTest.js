const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns ['d', 'e'] for ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']), ['d', 'e']);
  });
});