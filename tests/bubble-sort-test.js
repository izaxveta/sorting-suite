const assert = require('chai').assert
const bubbleSort = require('../lib/bubble-sort')

describe('Bubble Sort', function() {
  it('can sort an array of numbers', function() {
    assert.deepEqual(bubbleSort([5,3,2,4,1]), [1,2,3,4,5])
  })

  it('can sort any array of numbers', function() {
    assert.deepEqual(bubbleSort([8,5,9,3,4,7,10,2,6,1]), [1,2,3,4,5,6,7,8,9,10])
  })
})
