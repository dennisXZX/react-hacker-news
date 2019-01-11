import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  GET_HOT_SEARCH_LIST,
  HOT_SEARCH_MOUSE_ENTER,
  HOT_SEARCH_MOUSE_LEAVE,
  CHANGE_PAGE
} from './headerActions'

const defaultState = {
  currentPage: 1,
  currentSearch: '',
  isFocused: false,
  isHotSearchMouseIn: false,
  hotSearchList: [],
  totalPage: 1
}

const _handleSearchFocus = (state, action) => {
  return {
    ...state,
    isFocused: true
  }
}

const _handleSearchBlur = (state, action) => {
  return {
    ...state,
    isFocused: false
  }
}

const _getHotSearchList = (state, action) => {
  return {
    ...state,
    hotSearchList: action.hotSearchList,
    totalPage: action.totalPage
  }
}

const _handleHotSearchMouseEnter = (state, action) => {
  return {
    ...state,
    isHotSearchMouseIn: true
  }
}

const _handleHotSearchMouseLeave = (state, action) => {
  return {
    ...state,
    isHotSearchMouseIn: false
  }
}

const _changePage = (state, action) => {
  return {
    ...state,
    currentPage: action.newCurrentPage
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return _handleSearchFocus(state, action)
    case SEARCH_BLUR:
      return _handleSearchBlur(state, action)
    case GET_HOT_SEARCH_LIST:
      return _getHotSearchList(state, action)
    case HOT_SEARCH_MOUSE_ENTER:
      return _handleHotSearchMouseEnter(state, action)
    case HOT_SEARCH_MOUSE_LEAVE:
      return _handleHotSearchMouseLeave(state, action)
    case CHANGE_PAGE:
      return _changePage(state, action)
    default:
      return state
  }
}