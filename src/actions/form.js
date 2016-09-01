/**
 * [onTextFieldChange]
 * @param  {String} actionType
 * @param  {String} name
 * @param  {Any} value
 * @return {Object}
 */
export function onTextFieldChange(actionType, name, value) {
  return {
    type: actionType,
    payload: {
      [name.toLowerCase()]: value
    }
  }
}

/**
 * [onListFieldChange]
 * @param  {String} actionType
 * @param  {Object} options
 * @param  {Any} value
 * @return {Object}
 */
export function onListFieldChange(actionType, options, value) {
  return {
    type: actionType,
    ...options,
    value
  }
}

export default {
  onTextFieldChange,
  onListFieldChange
}
