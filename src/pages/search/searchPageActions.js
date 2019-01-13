import axios from 'axios'

import { BASE_HACKER_NEWS_API } from '../../constants/apiURL'

export const UPDATE_ARTICLE_LIST = 'Search@UPDATE_ARTICLE_LIST'
export const UPDATE_ARTICLE_PAGE = 'Search@UPDATE_ARTICLE_PAGE'

export const updateArticleList = ({ articleList, articlePerPage, totalPage }) => ({
  type: UPDATE_ARTICLE_LIST,
  articleList,
  articlePerPage,
  totalPage
})


const updateArticlePage = pageNum => ({
  type: UPDATE_ARTICLE_PAGE,
  pageNum
})

export const fetchArticleList = ({ dispatch, searchWord = '', pageNum = 0 }) => {
  axios.get(`${BASE_HACKER_NEWS_API}query=${searchWord}&page=${pageNum}`)
    .then(res => {
      const { hits, nbPages, hitsPerPage } = res.data

      const searchResult = {
        articleList: hits,
        articlePerPage: hitsPerPage,
        totalPage: nbPages
      }

      dispatch(updateArticleList(searchResult))
      dispatch(updateArticlePage(pageNum))
    })
    .catch(err => {
      console.log('Load article list error', err)
    })
}

export const loadInitialPageData = () => dispatch => {
  const queryParams = {
    dispatch,
    searchWord: 'hello world'
  }

  fetchArticleList(queryParams)
}

export const loadPageData = (searchWord, { selected: pageNum }) => dispatch => {
  console.log(searchWord, pageNum)
  dispatch(updateArticlePage(pageNum))

  const queryParams = {
    dispatch,
    searchWord,
    pageNum
  }

  fetchArticleList(queryParams)
}
