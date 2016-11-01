import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Table from 'components/Table'
import Pagination from 'components/Pagination'
import LoadingOverlay from 'components/LoadingOverlay'
import Controls from './PostsControls'
import PostsViewTableActions from './PostsViewTableActions'
import constants from '../constants'


export default function PostsView(props) {
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
      <Table
        items={items}
        columns={constants.POSTS__COLUMNS}
        columnsLabels={constants.POSTS__COLUMNS_LABELS}
        actions={{
          component: PostsViewTableActions,
        }}
        sortable={true}
        sort={sort}
        sortBy={sortBy}
        sortableColumns={constants.POSTS__SORT_FIELDS}
        filterColumns={constants.POSTS__FILTER_FIELDS}
        filterChange={filter}
        filters={filters}
      />
      <Pagination show={showPagination} handleClick={paginate}/>
      <LoadingOverlay {...props} />
    </div>
  )
}

PostsView.propTypes = {
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
