import React from 'react'

export default function TableBody(props) {
  let { items, columns, actions } = props

  function addActionsCellForItems(items) {
    return actions && actions.component
      ? items.map((item, i) => ({
        ...item,
        actions: <actions.component
          {...item}
          id={item.id}
          index={i}
          {...(actions.handlers || {})}
        />
      }))
      : items
  }

  function createItems(items) {
    return items.map((item, i) =>
      <tr key={i}>
        {fillRow(columns, item)}
      </tr>)
  }

  function fillRow(columns, item) {
    return columns.map((column, i) =>
      <td key={i} className={`table-cell-${columns[i]}`}>
        {item[columns[i]]}
      </td>)
  }

  return (
    <tbody>
      {createItems(addActionsCellForItems(items))}
    </tbody>
  )
}

TableBody.PropTypes = {
  items: React.PropTypes.array,
  columns: React.PropTypes.array,
  actions: React.PropTypes.shape({
    component: React.PropTypes.func,
    handlers: React.PropTypes.array
  })
}
