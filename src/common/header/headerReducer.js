import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  GET_HOT_SEARCH_LIST,
  HOT_SEARCH_MOUSE_ENTER,
  HOT_SEARCH_MOUSE_LEAVE,
  HOT_SEARCH_CHANGE_PAGE,
  CHANGE_SEARCH
} from './headerActions'

const defaultState = {
  currentPage: 1,
  currentSearch: '',
  isFocused: false,
  isHotSearchMouseIn: false,
  hotSearchList: [],
  totalPage: 1
}

const handleSearchFocus = (state, action) => {
  return {
    ...state,
    isFocused: true
  }
}

const handleSearchBlur = (state, action) => {
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

const handleHotSearchMouseEnter = (state, action) => {
  return {
    ...state,
    isHotSearchMouseIn: true
  }
}

const handleHotSearchMouseLeave = (state, action) => {
  return {
    ...state,
    isHotSearchMouseIn: false
  }
}

const handleHotSearchPageChange = (state, action) => {
  return {
    ...state,
    currentPage: action.newCurrentPage
  }
}

const handleSearchChange = (state, action) => {
  return {
    ...state,
    currentSearch: action.newSearchWord
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return handleSearchFocus(state, action)
    case SEARCH_BLUR:
      return handleSearchBlur(state, action)
    case GET_HOT_SEARCH_LIST:
      return getHotSearchList(state, action)
    case HOT_SEARCH_MOUSE_ENTER:
      return handleHotSearchMouseEnter(state, action)
    case HOT_SEARCH_MOUSE_LEAVE:
      return handleHotSearchMouseLeave(state, action)
    case HOT_SEARCH_CHANGE_PAGE:
      return handleHotSearchPageChange(state, action)
    case CHANGE_SEARCH:
      return handleSearchChange(state, action)
    default:
      return state
  }
}