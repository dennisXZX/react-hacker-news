import axios from 'axios'

export const UPDATE_ARTICLE_LIST = 'Search.UPDATE_ARTICLE_LIST'

const _updateArticleList = (searchResult) => {
  const { articleList, articlePerPage, totalPage } = searchResult
  return {
    type: UPDATE_ARTICLE_LIST,
    articleList,
    articlePerPage,
    totalPage
  }
}

export const _loadArticleList = (apiUrl) => (dispatch) => {
  axios.get(apiUrl)
    .then(res => {
      const { hits, nbPages, hitsPerPage } = res.data

      const searchResult = {
        articleList: hits,
        articlePerPage: hitsPerPage,
        totalPage: nbPages
      }

      dispatch(_updateArticleList(searchResult))
    })
    .catch(() => {
      console.log('Get home page data error')
    })
}

export const loadInitialPageData = () => dispatch => {
  const frontPageAPI = 'http://hn.algolia.com/api/v1/search?tags=front_page';
  dispatch(_loadArticleList(frontPageAPI))
}