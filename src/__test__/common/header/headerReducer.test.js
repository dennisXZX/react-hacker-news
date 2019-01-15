import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  UPDATE_HOT_SEARCH_LIST,
  HOT_SEARCH_MOUSE_ENTER,
  HOT_SEARCH_MOUSE_LEAVE,
  HOT_SEARCH_CHANGE_PAGE,
  CHANGE_SEARCH
} from '../../../common/header/headerActions'

import headerReducer from '../../../common/header/headerReducer'

describe('header reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      currentHotSearchPage: 1,
      currentSearch: 'hello world',
      isFocused: false,
      isHotSearchMouseIn: false,
      hotSearchList: [],
      totalPage: 1
    }
  })

  it('should return the initial state', () => {
    expect(headerReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle CHANGE_SEARCH action', () => {
    const expectedState = {
      ...initialState,
      currentSearch: 'newSearch'
    }

    const state = headerReducer(initialState, {
      type: CHANGE_SEARCH,
      searchWord: 'newSearch'
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle UPDATE_HOT_SEARCH_LIST action', () => {
    const expectedState = {
      ...initialState,
      hotSearchList: ['hello', 'world'],
      totalPage: 1
    }

    const state = headerReducer(initialState, {
      type: UPDATE_HOT_SEARCH_LIST,
      hotSearchList: ['hello', 'world'],
      totalPage: 1
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle HOT_SEARCH_MOUSE_ENTER action', () => {
    const expectedState = {
      ...initialState,
      isHotSearchMouseIn: true
    }

    const state = headerReducer(initialState, {
      type: HOT_SEARCH_MOUSE_ENTER
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle HOT_SEARCH_MOUSE_LEAVE action', () => {
    const expectedState = {
      ...initialState,
      isHotSearchMouseIn: false
    }

    const state = headerReducer(initialState, {
      type: HOT_SEARCH_MOUSE_LEAVE
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle HOT_SEARCH_CHANGE_PAGE action', () => {
    const expectedState = {
      ...initialState,
      currentHotSearchPage: 3
    }

    const state = headerReducer(initialState, {
      type: HOT_SEARCH_CHANGE_PAGE,
      newCurrentPage: 3
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle SEARCH_FOCUS action', () => {
    const expectedState = {
      ...initialState,
      isFocused: true
    }

    const state = headerReducer(initialState, {
      type: SEARCH_FOCUS
    })

    expect(state).toEqual(expectedState)
  })

  it('should handle SEARCH_BLUR action', () => {
    const expectedState = {
      ...initialState,
      isFocused: false
    }

    const state = headerReducer(initialState, {
      type: SEARCH_BLUR
    })

    expect(state).toEqual(expectedState)
  })
})
