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
      pageCount={30}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      containerClassName="paginationContainer"
      pageClassName="paginationPage"
      previousClassName="paginationPrevious"
      nextClassName="paginationNext"
      onPageChange={handlePageClick}
    />
  </PaginationWrapper>
)

export default Pagination
