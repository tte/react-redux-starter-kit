import React from 'react'
import {
  SORT_TYPE_ASC,
  SORT_TYPE_DESC } from '../../constants'


export default function TableHeaderSortableLabel(props) {
  const { item, sortBy, sort, label } = props
  const sortIconClasses = {
    [SORT_TYPE_ASC]: 'caret',
    [SORT_TYPE_DESC]: 'caret triangle-top'
  }
  const sortItem = sort.filter(_item => _item.target == item)

  return (
    <span onClick={sortBy.bind(null, item)} style={{ color: '#000' }}>
      <b>{label}</b>&nbsp;
      <span
        className={sortItem.length ? sortIconClasses[sortItem[0].order] : ''}
        aria-hidden="true"
      ></span>
    </span>
  )
}

TableHeaderSortableLabel.PropTypes = {
  item: React.PropTypes.string,
  sortBy: React.PropTypes.func,
  sort: React.PropTypes.array,
  label: React.PropTypes.string
}
