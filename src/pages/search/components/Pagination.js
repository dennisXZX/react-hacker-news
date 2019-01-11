import React from 'react'
import ReactPaginate from 'react-paginate'
import {
  PaginationWrapper
} from './paginationStyle'

const Pagination = ({ handlePageClick }) => (
  <PaginationWrapper>
    <ReactPaginate
      activeClassName="paginationActive"
      breakClassName="paginationBreak"
      containerClassName="paginationContainer"
      marginPagesDisplayed={1}
      nextClassName="paginationNext"
      nextLabel=">"
      onPageChange={handlePageClick}
      pageCount={30}
      pageRangeDisplayed={2}
      pageClassName="paginationPage"
      previousClassName="paginationPrevious"
      previousLabel="<"
    />
  </PaginationWrapper>
)

export default Pagination
