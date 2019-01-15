import {
  UPDATE_RESULT_LIST,
  UPDATE_RESULT_PAGE,
  UPDATE_RESULT_LIST_START,
  UPDATE_RESULT_LIST_FAIL
} from './searchPageActions'

const defaultState = {
  resultList: [],
  resultPerPage: 20,
  currentResultPage: 0,
  resultCount: 0,
  processingTimeMS: 0,
  error: null,
  isLoading: false,
  totalPage: 0
}

const updateResultList = (state, action) => {
  const {
    resultList,
    resultPerPage,
    totalPage,
    resultCount,
    processingTimeMS
  } = action

  return {
    ...state,
    resultCount,
    resultList,
    resultPerPage,
    isLoading: false,
    processingTimeMS,
    totalPage
  }
}

const updateResultPage = (state, { pageNum }) => {
  return {
    ...state,
    currentResultPage: pageNum
  }
}

const updateResultListStart = state => {
  return {
    ...state,
    isLoading: true
  }
}

const updateResultListFail = (state, { error }) => {
  return {
    ...state,
    isLoading: false,
    error
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_RESULT_LIST:
      return updateResultList(state, action)
    case UPDATE_RESULT_PAGE:
      return updateResultPage(state, action)
    case UPDATE_RESULT_LIST_START:
      return updateResultListStart(state, action)
    case UPDATE_RESULT_LIST_FAIL:
      return updateResultListFail(state, action)
    default:
      return state
  }
}
