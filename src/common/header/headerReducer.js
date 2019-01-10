import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  GET_HOT_SEARCH_LIST,
  HOT_SEARCH_MOUSE_ENTER,
  HOT_SEARCH_MOUSE_LEAVE,
  CHANGE_PAGE
} from './headerActions'

const defaultState = {
  isFocused: false,
  isHotSearchMouseIn: false,
  hotSearchList: [],
  currentPage: 1,
  totalPage: 1
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...state,
        isFocused: true
      }
    case SEARCH_BLUR:
      return {
        ...state,
        isFocused: false
      }
    case GET_HOT_SEARCH_LIST:
      return {
        ...state,
        hotSearchList: action.hotSearchList,
        totalPage: action.totalPage
      }
    case HOT_SEARCH_MOUSE_ENTER:
      return {
        ...state,
        isHotSearchMouseIn: true
      }
    case HOT_SEARCH_MOUSE_LEAVE:
      return {
        ...state,
        isHotSearchMouseIn: false
      }
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.newCurrentPage
      }
    default:
      return state
  }
}