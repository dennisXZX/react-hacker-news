import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import {
  PaginationWrapper
} from './paginationStyle'

const Pagination = ({
    currentArticlePage,
    currentSearch,
    loadPageData
  }) => (
  <PaginationWrapper>
    <ReactPaginate
      activeClassName="paginationActive"
      breakClassName="paginationBreak"
      containerClassName="paginationContainer"
      forcePage={currentArticlePage}
      marginPagesDisplayed={1}
      nextClassName="paginationNext"
      nextLabel=">"
      onPageChange={(pageObj) => loadPageData(currentSearch, pageObj.selected)}
      pageCount={30}
      pageRangeDisplayed={2}
      pageClassName="paginationPage"
      previousClassName="paginationPrevious"
      previousLabel="<"
    />
  </PaginationWrapper>
)

Pagination.propTypes = {
	loadPageData: PropTypes.func.isRequired,
	currentArticlePage: PropTypes.number.isRequired,
	currentSearch: PropTypes.string.isRequired
}

export default Pagination
