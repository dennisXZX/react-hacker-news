import axios from 'axios'

import { BASE_HACKER_NEWS_API } from '../../constants/apiURL'

export const UPDATE_ARTICLE_LIST = 'Search@UPDATE_ARTICLE_LIST'
export const UPDATE_ARTICLE_LIST_START = 'Search@UPDATE_ARTICLE_LIST_START'
export const UPDATE_ARTICLE_LIST_FAIL = 'Search@UPDATE_ARTICLE_LIST_FAIL'
export const UPDATE_ARTICLE_PAGE = 'Search@UPDATE_ARTICLE_PAGE'

const updateArticleList = ({
  articleList,
  articleCount,
  articlePerPage,
  processingTimeMS,
  totalPage
}) => ({
  type: UPDATE_ARTICLE_LIST,
  articleList,
  articleCount,
  articlePerPage,
  processingTimeMS,
  totalPage
})

const updateArticlePage = pageNum => ({
  type: UPDATE_ARTICLE_PAGE,
  pageNum
})

const fetchArticleListStart = () => ({
  type: UPDATE_ARTICLE_LIST_START
})

const fetchArticleListFail = error => ({
  type: UPDATE_ARTICLE_LIST_FAIL,
  error
})

export const fetchArticleList = ({
  dispatch,
  searchWord = '',
  pageNum = 0
}) => {
  dispatch(fetchArticleListStart())

  axios
    .get(`${BASE_HACKER_NEWS_API}query=${searchWord}&page=${pageNum}`)
    .then(res => {
      const { hits, nbPages, hitsPerPage, nbHits, processingTimeMS } = res.data

      const searchResult = {
        articleList: hits,
        articlePerPage: hitsPerPage,
        totalPage: nbPages,
        articleCount: nbHits,
        processingTimeMS
      }

      dispatch(updateArticlePage(pageNum))
      dispatch(updateArticleList(searchResult))
    })
    .catch(err => {
      dispatch(fetchArticleListFail(err))
    })
}

export const loadPageData = (searchWord = '', pageNum = 0) => dispatch => {
  const queryParams = {
    dispatch,
    searchWord,
    pageNum
  }

  fetchArticleList(queryParams)
}
