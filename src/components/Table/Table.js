import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'


const Table = (props) => {
  const {
    items,
    styles,
    hideHeader,
    hideNoItemsMessage,
    columns,
    actions } = props

  let filteredColumns = columns
  if(actions && actions.component && !columns.includes('actions'))
    filteredColumns = columns.concat('actions')

  const header = hideHeader
    ? false
    : <TableHeader {...props} columns={filteredColumns}/>
  const body = <TableBody {...props} columns={filteredColumns}/>
  const tableClass = styles && styles.className
    ? styles.className
    : "table table-bordered"

  return items.length
    ? (<table className={ tableClass }>
        {header}
        {body}
      </table>)
    : hideNoItemsMessage
      ? false
      : (<div>No items found</div>)
}

Table.propTypes = {
  items: React.PropTypes.array.isRequired,
  columns: React.PropTypes.array.isRequired,
  columnsLabels: React.PropTypes.object,
  actions: React.PropTypes.shape({
    component: React.PropTypes.func,
  }),
  sortable: React.PropTypes.bool,
  sort: React.PropTypes.array,
  sortBy: React.PropTypes.func,
  sortableColumns: React.PropTypes.array,
  paginate: React.PropTypes.func,
  filterChange: React.PropTypes.func,
  filters: React.PropTypes.array,
  filterColumns: React.PropTypes.array,
  hideHeader: React.PropTypes.bool,
  hideNoItemsMessage: React.PropTypes.bool,
  styles: React.PropTypes.shape({
    className: React.PropTypes.string,
  }),
}

export default Table
