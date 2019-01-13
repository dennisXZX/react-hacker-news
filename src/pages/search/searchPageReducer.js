import {
  UPDATE_ARTICLE_LIST
} from './searchPageActions'

const defaultState = {
  articleList: [],
  totalPage: 0,
  articlePerPage: 20
}

const updateArticleList = (state, action) => {
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
      return updateArticleList(state, action)
    default:
      return state
  }
}