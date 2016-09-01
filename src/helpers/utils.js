/**
 * [getNext - Get next element from array.
 * If current element is last, return first argument. ]
 * @param  {Any} currentItem
 * @param  {Array} arr
 * @return {Any}
 */
export function getNext(currentItem, arr) {
  let index = arr.indexOf(currentItem)
  if(index === -1) index = 0

  return arr[arr.length - 1 > index ? ++index : 0]
}

/**
 * [capitalize - represent first char to upper case]
 * @param  {String} text
 * @return {String}
 */
export function capitalize(text) {
  return text.substr(0, 1).toUpperCase() + text.substr(1)
}

/**
 * [humanizeTimeFromSeconds - represent seconds in hours and mins]
 * @param  {Number} seconds
 * @return {Object}
 */
export function humanizeTimeFromSeconds(seconds) {
  let minutes = parseInt(seconds) / 60
  let hours = integerDivision(minutes, 60)

  minutes -= hours * 60

  return {
    hours,
    minutes: parseInt(minutes)
  }
}

/**
 * [integerDivision]
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */
function integerDivision(a, b) {
  return (a - a % b) / b
}

export default {
  getNext,
  capitalize,
  humanizeTimeFromSeconds
}
