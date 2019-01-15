import { createStore, compose } from 'redux'
import rootReducer from '../store/rootReducer'
import { middlewares } from '../store/configStore'

export const mockInitialState = {
  header: {
    currentHotSearchPage: 1,
    currentSearch: 'hello world',
    isFocused: false,
    isHotSearchMouseIn: false,
    hotSearchList: [],
    totalPage: 1
  },
  searchPage: {
    resultList: [],
    resultPerPage: 20,
    currentResultPage: 0,
    resultCount: 0,
    processingTimeMS: 0,
    error: null,
    isLoading: false,
    totalPage: 0
  }
}

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState, compose(...middlewares))
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
