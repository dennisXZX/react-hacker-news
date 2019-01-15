import {
  UPDATE_ARTICLE_LIST,
  UPDATE_ARTICLE_PAGE,
  UPDATE_ARTICLE_LIST_START,
  UPDATE_ARTICLE_LIST_FAIL
} from './searchPageActions'

const defaultState = {
  articleList: [],
  articlePerPage: 20,
  currentArticlePage: 0,
  articleCount: 0,
  processingTimeMS: 0,
  error: null,
  isLoading: false,
  totalPage: 0
}

const updateArticleList = (state, action) => {
  const {
    articleList,
    articlePerPage,
    totalPage,
    articleCount,
    processingTimeMS
  } = action

  return {
    ...state,
    articleCount,
    articleList,
    articlePerPage,
    isLoading: false,
    processingTimeMS,
    totalPage
  }
}

const updateArticlePage = (state, { pageNum }) => {
  return {
    ...state,
    currentArticlePage: pageNum
  }
}

const updateArticleListStart = state => {
  return {
    ...state,
    isLoading: true
  }
}

const updateArticleListFail = (state, { error }) => {
  return {
    ...state,
    isLoading: false,
    error
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_LIST:
      return updateArticleList(state, action)
    case UPDATE_ARTICLE_PAGE:
      return updateArticlePage(state, action)
    case UPDATE_ARTICLE_LIST_START:
      return updateArticleListStart(state, action)
    case UPDATE_ARTICLE_LIST_FAIL:
      return updateArticleListFail(state, action)
    default:
      return state
  }
}
