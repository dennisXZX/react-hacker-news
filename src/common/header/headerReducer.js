import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  UPDATE_HOT_SEARCH_LIST,
  HOT_SEARCH_MOUSE_ENTER,
  HOT_SEARCH_MOUSE_LEAVE,
  HOT_SEARCH_CHANGE_PAGE,
  CHANGE_SEARCH
} from './headerActions'

const defaultState = {
  currentHotSearchPage: 1,
  currentSearch: 'hello world',
  hotSearchList: [],
  isFocused: false,
  isHotSearchMouseIn: false,
  totalPage: 1
}

const handleSearchFocus = state => {
  return {
    ...state,
    isFocused: true
  }
}

const handleSearchBlur = state => {
  return {
    ...state,
    isFocused: false
  }
}

const getHotSearchList = (state, action) => {
  return {
    ...state,
    hotSearchList: action.hotSearchList,
    totalPage: action.totalPage
  }
}

const handleHotSearchMouseEnter = state => {
  return {
    ...state,
    isHotSearchMouseIn: true
  }
}

const handleHotSearchMouseLeave = state => {
  return {
    ...state,
    isHotSearchMouseIn: false
  }
}

const changeHotSearchPage = (state, action) => {
  return {
    ...state,
    currentHotSearchPage: action.newCurrentPage
  }
}

const changeSearch = (state, action) => {
  return {
    ...state,
    currentSearch: action.searchWord
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return changeSearch(state, action)
    case HOT_SEARCH_MOUSE_ENTER:
      return handleHotSearchMouseEnter(state, action)
    case HOT_SEARCH_MOUSE_LEAVE:
      return handleHotSearchMouseLeave(state, action)
    case HOT_SEARCH_CHANGE_PAGE:
      return changeHotSearchPage(state, action)
    case SEARCH_FOCUS:
      return handleSearchFocus(state, action)
    case SEARCH_BLUR:
      return handleSearchBlur(state, action)
    case UPDATE_HOT_SEARCH_LIST:
      return getHotSearchList(state, action)
    default:
      return state
  }
}
