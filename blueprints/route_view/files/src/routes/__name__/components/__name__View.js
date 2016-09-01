import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Table from 'components/Table'
import Pagination from 'components/Pagination'
import LoadingOverlay from 'components/LoadingOverlay'
import Controls from './<%= pascalEntityName %>Controls'
import <%= pascalEntityName %>ViewTableActions from './<%= pascalEntityName %>ViewTableActions'
import {
  <%= pascalEntityName.toUpperCase() %>__COLUMNS,
  <%= pascalEntityName.toUpperCase() %>__COLUMNS_LABELS,
  <%= pascalEntityName.toUpperCase() %>__SORT_FIELDS,
  <%= pascalEntityName.toUpperCase() %>__FILTER_FIELDS } from '../constants'


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
        columns={<%= pascalEntityName.toUpperCase() %>__COLUMNS}
        columnsLabels={<%= pascalEntityName.toUpperCase() %>__COLUMNS_LABELS}
        actions={{
          component: <%= pascalEntityName %>ViewTableActions,
        }}
        sortable={true}
        sort={sort}
        sortBy={sortBy}
        sortableColumns={<%= pascalEntityName.toUpperCase() %>__SORT_FIELDS}
        filterColumns={<%= pascalEntityName.toUpperCase() %>__FILTER_FIELDS}
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
  sort: React.PropTypes.object,
  sortBy: React.PropTypes.func,
  showPagination: React.PropTypes.bool,
  paginate: React.PropTypes.func,
  filter: React.PropTypes.func,
  filters: React.PropTypes.array,
  isFetching: React.PropTypes.bool.isRequired
}
