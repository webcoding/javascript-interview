var assert = require('assert');

/********************************
 * YOUR CODES HERE
 ********************************/

function arrayIntersect(a, b) {
  return [];
}

/********************************
 * YOUR CODES HERE
 ********************************/

assert.deepEqual(
  arrayIntersect([1,2,3], [2,3,4]),
  [2,3]
);

assert.deepEqual(
  arrayIntersect([4,7,2], [1,5,2]),
  [2]
);

assert.deepEqual(
  arrayIntersect([3,2,1], [3,2,1]),
  [1,2,3]
);

assert.deepEqual(
  arrayIntersect([1,2,3,4], [5,6,7,8]),
  []
);

console.log('Success!');