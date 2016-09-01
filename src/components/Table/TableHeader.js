import React from 'react'
import TableHeaderFilterLabel from './TableHeaderFilterLabel'
import TableHeaderSortableLabel from './TableHeaderSortableLabel'


export default function TableHeader(props) {
  let {
    columns,
    columnsLabels,
    sortable,
    sortableColumns,
    filterColumns,
    filterChange,
    filters,
    actions } = props

  const headerItems = columns.map((item, i) =>
    <td key={i}>
      <TableHeaderFilterLabel
        key={i}
        filterColumns={filterColumns}
        filterChange={filterChange}
        item={item}
        value={getFilterValue(filters, item)}
      >
        { sortable && sortableColumns.includes(item)
          ? <TableHeaderSortableLabel
              item={item}
              label={getLabel(columnsLabels, item)}
              {...props}
            />
          : getLabel(columnsLabels, item)
        }
      </TableHeaderFilterLabel>
    </td>)

  function getLabel(columnsLabels, item) {
    return columnsLabels && columnsLabels[item]
      ? columnsLabels[item]
      : item
  }

  function getFilterValue(items = [], target) {
    const filter = items.filter(item => item.target == target)
    return filter && filter[0] ? filter[0].query : ''
  }

  return (
    <thead>
      <tr>
        {headerItems}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  items: React.PropTypes.array,
  columns: React.PropTypes.array.isRequired,
  columnsLabels: React.PropTypes.object,
  actions: React.PropTypes.shape({
    component: React.PropTypes.func,
  }),
  sortable: React.PropTypes.bool,
  sort: React.PropTypes.array,
  sortBy: React.PropTypes.func,
  sortableColumns: React.PropTypes.array,
  filterChange: React.PropTypes.func,
  filters: React.PropTypes.array,
  filterColumns: React.PropTypes.array
}
