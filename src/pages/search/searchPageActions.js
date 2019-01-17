import axios from 'axios'

import { BASE_HACKER_NEWS_API } from '../../constants/apiURLs'

export const UPDATE_RESULT_LIST = 'Search@UPDATE_RESULT_LIST'
export const UPDATE_RESULT_LIST_START = 'Search@UPDATE_RESULT_LIST_START'
export const UPDATE_RESULT_LIST_FAIL = 'Search@UPDATE_RESULT_LIST_FAIL'
export const UPDATE_RESULT_PAGE = 'Search@UPDATE_RESULT_PAGE'

const updateResultList = ({
  resultList,
  resultCount,
  resultPerPage,
  processingTimeMS,
  totalPage
}) => ({
  type: UPDATE_RESULT_LIST,
  resultList,
  resultCount,
  resultPerPage,
  processingTimeMS,
  totalPage
})

const updateResultPage = pageNum => ({
  type: UPDATE_RESULT_PAGE,
  pageNum
})

const fetchResultListStart = () => ({
  type: UPDATE_RESULT_LIST_START
})

const fetchResultListSuccess = (pageNum, searchResult) => dispatch => {
  dispatch(updateResultPage(pageNum))
  dispatch(updateResultList(searchResult))
}

const fetchResultListFail = error => ({
  type: UPDATE_RESULT_LIST_FAIL,
  error
})

export const fetchResultList = ({
  dispatch,
  searchWord = '',
  pageNum = 0
}) => {
  dispatch(fetchResultListStart())

  axios
    .get(`${BASE_HACKER_NEWS_API}query=${searchWord}&page=${pageNum}`)
    .then(res => {
      const {
        hits,
        hitsPerPage,
        nbPages,
        nbHits,
        processingTimeMS
      } = res.data

      const searchResult = {
        resultList: hits,
        resultPerPage: hitsPerPage,
        totalPage: nbPages,
        resultCount: nbHits,
        processingTimeMS
      }

      dispatch(fetchResultListSuccess(pageNum, searchResult))
    })
    .catch(err => {
      dispatch(fetchResultListFail(err))
    })
}

export const loadPageData = (searchWord = '', pageNum = 0) => dispatch => {
  const queryParams = {
    dispatch,
    searchWord,
    pageNum
  }

  fetchResultList(queryParams)
}
