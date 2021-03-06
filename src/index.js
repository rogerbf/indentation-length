module.exports = str => {
  if (str === undefined) throw new Error('no string provided')
  if (typeof(str) !== 'string') throw new TypeError('argument must be a string')
  return str.slice(0, str.match(/\w/).index).length
}
