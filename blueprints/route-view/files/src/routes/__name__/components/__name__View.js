import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Table from 'components/Table'
import Pagination from 'components/Pagination'
import LoadingOverlay from 'components/LoadingOverlay'
import Controls from './<%= pascalEntityName %>Controls'
import <%= pascalEntityName %>ViewTableActions from './<%= pascalEntityName %>ViewTableActions'
import constants from '../constants'


export default function <%= pascalEntityName %>View(props) {
  const {
    items,
    sort,
    sortBy,
    showPagination,
    paginate,
    filter,
    filters } = props

  return (
    <div>
      <Controls {...props}/>
      <Table
        items={items}
        columns={constants.<%= pascalEntityName.toUpperCase() %>__COLUMNS}
        columnsLabels={constants.<%= pascalEntityName.toUpperCase() %>__COLUMNS_LABELS}
        actions={{
          component: <%= pascalEntityName %>ViewTableActions,
        }}
        sortable={true}
        sort={sort}
        sortBy={sortBy}
        sortableColumns={constants.<%= pascalEntityName.toUpperCase() %>__SORT_FIELDS}
        filterColumns={constants.<%= pascalEntityName.toUpperCase() %>__FILTER_FIELDS}
        filterChange={filter}
        filters={filters}
      />
      <Pagination show={showPagination} handleClick={paginate}/>
      <LoadingOverlay {...props} />
    </div>
  )
}

<%= pascalEntityName %>View.propTypes = {
  items: React.PropTypes.array.isRequired,
  sort: React.PropTypes.array,
  sortBy: React.PropTypes.func,
  showPagination: React.PropTypes.bool,
  paginate: React.PropTypes.func,
  filter: React.PropTypes.func,
  filters: React.PropTypes.array,
  meta: React.PropTypes.shape({
    isFetching: React.PropTypes.bool.isRequired
  })
}
