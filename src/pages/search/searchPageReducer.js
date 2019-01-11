import {
  UPDATE_ARTICLE_LIST
} from './searchPageActions'

const defaultState = {
  articleList: [],
  totalPage: 0,
  articlePerPage: 0
}

const _updateHitArticleList = (state, action) => {
  const { articleList, articlePerPage, totalPage } = action

  return {
    ...state,
    articleList,
    articlePerPage,
    totalPage
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_LIST:
      return _updateHitArticleList(state, action)
    default:
      return state
  }
}