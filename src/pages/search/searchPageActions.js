import axios from 'axios'

export const UPDATE_HIT_ARTICLE_LIST = 'Search.UPDATE_HIT_ARTICLE_LIST'

const _updateHitArticleList = (hitArticleList) => ({
  type: UPDATE_HIT_ARTICLE_LIST,
  hitArticleList
})

export const loadInitialPageData = () => (dispatch) => {
  axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
    .then(res => {
      const hitArticleList = res.data.hits

      dispatch(_updateHitArticleList(hitArticleList))
    })
    .catch(() => {
      console.log('Get home page data error')
    })
}