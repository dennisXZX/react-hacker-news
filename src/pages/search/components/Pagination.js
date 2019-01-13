import React from 'react'
import ReactPaginate from 'react-paginate'
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

export default Pagination
