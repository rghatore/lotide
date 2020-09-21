const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns empty array for ["No tail!"]', () => {
    assert.deepEqual(tail(["No tail!"]), []);
  });
  it('returns empty array for an empty array', () => {
    assert.deepEqual(tail([]), []);
  })
});