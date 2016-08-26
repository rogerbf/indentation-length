const test = require('tape')
const indentation = require('./index.js')

test('is a function', assert => {
  assert.equal(typeof(indentation), 'function')
  assert.end()
})

test('throws when no argument is provided', assert => {
  assert.throws(() => indentation())
  assert.end()
})

test('throws when argument is not a string', assert => {
  assert.throws(() => indentation(Number()), 'number')
  assert.throws(() => indentation(Array()), 'array')
  assert.throws(() => indentation(Object()), 'object')
  assert.end()
})

test('indentation(\'whammy bam\') === 0', assert => {
  assert.equal(indentation('whammy bam'), 0)
  assert.end()
})

test('indentation(\'  whammy bam\') === 2', assert => {
  assert.equal(indentation('  whammy bam'), 2)
  assert.end()
})

test('tab indentation', assert => {
  assert.equal(indentation('\t\twhammy'), 2)
  assert.end()
})
