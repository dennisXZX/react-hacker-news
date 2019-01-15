import {
  UPDATE_ARTICLE_LIST,
  UPDATE_ARTICLE_PAGE,
  UPDATE_ARTICLE_LIST_START,
  UPDATE_ARTICLE_LIST_FAIL
} from '../../../pages/search/searchPageActions'

import searchReducer from '../../../pages/search/searchPageReducer'

describe('search reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      articleList: [],
      articlePerPage: 20,
      currentArticlePage: 0,
      articleCount: 0,
      processingTimeMS: 0,
      error: null,
      isLoading: false,
      totalPage: 0
    }
  })

  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle UPDATE_ARTICLE_LIST action', () => {
    const expectedState = {
      ...initialState,
      articleCount: 1,
      articleList: ['hi'],
      articlePerPage: 20,
      isLoading: false,
      processingTimeMS: 2,
      totalPage: 1
    }

    const state = searchReducer(initialState, {
      type: UPDATE_ARTICLE_LIST,
      articleCount: 1,
      articleList: ['hi'],
      articlePerPage: 20,
      processingTimeMS: 2,
      totalPage: 1
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_ARTICLE_PAGE action', () => {
    const expectedState = {
      ...initialState,
      currentArticlePage: 10
    }

    const state = searchReducer(initialState, {
      type: UPDATE_ARTICLE_PAGE,
      pageNum: 10
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_ARTICLE_LIST_START action', () => {
    const expectedState = {
      ...initialState,
      isLoading: true
    }

    const state = searchReducer(initialState, {
      type: UPDATE_ARTICLE_LIST_START
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_ARTICLE_LIST_FAIL action', () => {
    const expectedState = {
      ...initialState,
      isLoading: false,
      error: 'error'
    }

    const state = searchReducer(initialState, {
      type: UPDATE_ARTICLE_LIST_FAIL,
      error: 'error'
    })

    expect(state).toEqual(expectedState)
  })
})
