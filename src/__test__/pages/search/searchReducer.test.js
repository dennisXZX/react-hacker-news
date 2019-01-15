import {
  UPDATE_RESULT_LIST,
  UPDATE_RESULT_PAGE,
  UPDATE_RESULT_LIST_START,
  UPDATE_RESULT_LIST_FAIL
} from '../../../pages/search/searchPageActions'

import searchReducer from '../../../pages/search/searchPageReducer'

describe('search reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      resultList: [],
      resultPerPage: 20,
      currentResultPage: 0,
      resultCount: 0,
      processingTimeMS: 0,
      error: null,
      isLoading: false,
      totalPage: 0
    }
  })

  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle UPDATE_RESULT_LIST action', () => {
    const expectedState = {
      ...initialState,
      resultCount: 1,
      resultList: ['hi'],
      resultPerPage: 20,
      isLoading: false,
      processingTimeMS: 2,
      totalPage: 1
    }

    const state = searchReducer(initialState, {
      type: UPDATE_RESULT_LIST,
      resultCount: 1,
      resultList: ['hi'],
      resultPerPage: 20,
      processingTimeMS: 2,
      totalPage: 1
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_RESULT_PAGE action', () => {
    const expectedState = {
      ...initialState,
      currentResultPage: 10
    }

    const state = searchReducer(initialState, {
      type: UPDATE_RESULT_PAGE,
      pageNum: 10
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_RESULT_LIST_START action', () => {
    const expectedState = {
      ...initialState,
      isLoading: true
    }

    const state = searchReducer(initialState, {
      type: UPDATE_RESULT_LIST_START
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_RESULT_LIST_FAIL action', () => {
    const expectedState = {
      ...initialState,
      isLoading: false,
      error: 'error'
    }

    const state = searchReducer(initialState, {
      type: UPDATE_RESULT_LIST_FAIL,
      error: 'error'
    })

    expect(state).toEqual(expectedState)
  })
})
