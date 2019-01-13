import {
  UPDATE_ARTICLE_LIST,
  UPDATE_ARTICLE_PAGE
} from './searchPageActions'

const defaultState = {
  articleList: [],
  articlePerPage: 20,
  currentArticlePage: 0,
  totalPage: 0
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

const updateArticlePage = (state, action) => {
  const { pageNum } = action

  return {
    ...state,
    currentArticlePage: pageNum
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_LIST:
      return updateArticleList(state, action)
    case UPDATE_ARTICLE_PAGE:
      return updateArticlePage(state, action)
    default:
      return state
  }
}