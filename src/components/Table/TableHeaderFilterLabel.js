import React from 'react'


export default function TableHeaderFilterLabel(props) {
  const { children, filterColumns, filterChange, item, value } = props
  return filterColumns && filterColumns.includes(item)
    ? (<span>
        {children}
        <br/>
        <input
          name={item}
          type="text"
          value={value}
          onChange={ (e) => filterChange(item, e.target.value) }
          style={{ marginTop: 5, minWidth: 30, width: '100%' }}
        />
      </span>)
    : (<span>{children}</span>)
}

TableHeaderFilterLabel.PropTypes = {
  children: React.PropTypes.element,
  filters: React.PropTypes.array,
  filterColumns: React.PropTypes.array,
  item: React.PropTypes.string,
  value: React.PropTypes.string
}
