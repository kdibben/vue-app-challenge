QUnit.module('MAIN MODULE', {}) 

QUnit.test('TEST calculateTasks', assert => {
    assert.equal(calculateTasks(4, 5), 20, 'All Positive')
    assert.equal(calculateTasks(-9, -7), 63, 'All Negative')
    assert.equal(calculateTasks(-8, 3), -24, 'One Negative, One Positive')
  });