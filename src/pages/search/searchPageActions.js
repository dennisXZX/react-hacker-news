import axios from 'axios'

import { BASE_HACKER_NEWS_API } from '../../constants/apiURL'

export const UPDATE_ARTICLE_LIST = 'Search@UPDATE_ARTICLE_LIST'

export const updateArticleList = ({ articleList, articlePerPage, totalPage }) => {
  return {
    type: UPDATE_ARTICLE_LIST,
    articleList,
    articlePerPage,
    totalPage
  }
}

export const fetchArticleList = ({ dispatch, newSearchWord = '', pageNum = 0 }) => {
  axios.get(`${BASE_HACKER_NEWS_API}query=${newSearchWord}&page=${pageNum}`)
    .then(res => {
      const { hits, nbPages, hitsPerPage } = res.data

      const searchResult = {
        articleList: hits,
        articlePerPage: hitsPerPage,
        totalPage: nbPages
      }

      dispatch(updateArticleList(searchResult))
    })
    .catch(err => {
      console.log('Load article list error', err)
    })
}

export const loadInitialPageData = () => dispatch => {
  const queryParams = {
    dispatch,
    newSearchWord: 'hello world'
  }

  fetchArticleList(queryParams)
}