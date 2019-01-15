import axios from 'axios'
import debounce from 'lodash.debounce'

import { MOCK_HOT_SEARCH_API } from '../../constants/apiURL'

import { fetchArticleList } from '../../pages/search/searchPageActions'

export const HOT_SEARCH_PER_PAGE = 7

export const SEARCH_FOCUS = 'Header@SEARCH_FOCUS'
export const SEARCH_BLUR = 'Header@SEARCH_BLUR'
export const UPDATE_HOT_SEARCH_LIST = 'Header@UPDATE_HOT_SEARCH_LIST'
export const HOT_SEARCH_MOUSE_ENTER = 'Header@HOT_SEARCH_MOUSE_ENTER'
export const HOT_SEARCH_MOUSE_LEAVE = 'Header@HOT_SEARCH_MOUSE_LEAVE'
export const HOT_SEARCH_CHANGE_PAGE = 'Header@HOT_SEARCH_CHANGE_PAGE'
export const CHANGE_SEARCH = 'Header@CHANGE_SEARCH'

const updateHotSearchList = hotSearchList => ({
  type: UPDATE_HOT_SEARCH_LIST,
  hotSearchList,
  totalPage: Math.ceil(hotSearchList.length / HOT_SEARCH_PER_PAGE)
})

const searchFocus = () => ({
  type: SEARCH_FOCUS
})

const searchBlur = () => ({
  type: SEARCH_BLUR
})

const hotSearchMouseEnter = () => ({
  type: HOT_SEARCH_MOUSE_ENTER
})

const hotSearchMouseLeave = () => ({
  type: HOT_SEARCH_MOUSE_LEAVE
})

const changeHotSearchPage = newHotSearchPage => ({
  type: HOT_SEARCH_CHANGE_PAGE,
  newCurrentPage: newHotSearchPage
})

export const getHotSearchList = () => dispatch => {
  return axios.get(MOCK_HOT_SEARCH_API).then(res => {
    const hotSearchList = res.data.hotSearchList

    dispatch(updateHotSearchList(hotSearchList))
  })
}

const debounceFetchArticleList = debounce(fetchArticleList, 400)

const changeSearch = searchWord => dispatch => {
  dispatch({
    type: CHANGE_SEARCH,
    searchWord
  })

  const queryParams = {
    dispatch,
    searchWord
  }

  debounceFetchArticleList(queryParams)
}

export const handleSearchFocus = hotSearchList => dispatch => {
  hotSearchList.length <= 0 && dispatch(getHotSearchList())

  dispatch(searchFocus())
}

export const handleSearchBlur = () => dispatch => {
  dispatch(searchBlur())
}

export const handleHotSearchMouseEnter = () => dispatch => {
  dispatch(hotSearchMouseEnter())
}

export const handleHotSearchMouseLeave = () => dispatch => {
  dispatch(hotSearchMouseLeave())
}

export const handleChangeHotSearchPage = (
  currentPage,
  totalPage,
  spinIcon
) => dispatch => {
  const originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, '')
  const originAngleNum = originAngle ? parseInt(originAngle, 10) : 0
  spinIcon.style.transform = `rotate(${originAngleNum + 360}deg)`

  if (currentPage < totalPage) {
    dispatch(changeHotSearchPage(currentPage + 1))
  } else {
    dispatch(changeHotSearchPage(1))
  }
}

export const handleSearchChange = event => dispatch => {
  dispatch(changeSearch(event.target.value))
}

export const handleHotSearchClick = hotSearch => dispatch => {
  dispatch(changeSearch(hotSearch))
}
