import {
  SORT_TYPE_ASC,
  SORT_TYPE_DESC } from '../constants'

/**
 * [getNextSortOrder]
 * @param  {Array} sort
 * @param  {String} target
 * @return {Array}
 */
export function getNextSortOrder(sort, target) {
  const currentSortItem = sort.filter(item => item.target === target)
  if(currentSortItem.length) {
    switch(currentSortItem[0].order) {
      case SORT_TYPE_ASC:
        return sort.map(item => item.target === target
            ? { ...item, order: SORT_TYPE_DESC }
            : item)
      case SORT_TYPE_DESC:
        return sort.filter(item => item.target !== target)
    }
  }

  return sort.concat({target, order: SORT_TYPE_ASC})
}

export default {
  getNextSortOrder
}
