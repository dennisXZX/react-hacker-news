import axios from 'axios'
import debounce from 'lodash.debounce'

import { MOCK_HOT_SEARCH_API } from '../../constants/apiURL'

import { fetchArticleList } from '../../pages/search/searchPageActions'

export const SEARCH_FOCUS = 'Header.SEARCH_FOCUS'
export const SEARCH_BLUR = 'Header.SEARCH_BLUR'
export const GET_HOT_SEARCH_LIST = 'Header.GET_HOT_SEARCH_LIST'
export const HOT_SEARCH_MOUSE_ENTER = 'Header.HOT_SEARCH_MOUSE_ENTER'
export const HOT_SEARCH_MOUSE_LEAVE = 'Header.HOT_SEARCH_MOUSE_LEAVE'
export const HOT_SEARCH_CHANGE_PAGE = 'Header.HOT_SEARCH_CHANGE_PAGE'
export const CHANGE_SEARCH = 'Header.CHANGE_SEARCH'

const _changeList = (hotSearchList) => ({
  type: GET_HOT_SEARCH_LIST,
  hotSearchList,
  totalPage: Math.ceil(hotSearchList.length / 7)
})

const _searchFocus = () => ({
  type: SEARCH_FOCUS
})

const _searchBlur = () => ({
  type: SEARCH_BLUR
})

const _hotSearchMouseEnter = () => ({
  type: HOT_SEARCH_MOUSE_ENTER
})

const _hotSearchMouseLeave = () => ({
  type: HOT_SEARCH_MOUSE_LEAVE
})

const _changeHotSearchPage = (newCurrentPage) => ({
  type: HOT_SEARCH_CHANGE_PAGE,
  newCurrentPage
})

const _getHotSearchList = () => (dispatch) => {
  axios.get(MOCK_HOT_SEARCH_API)
    .then(res => {
      const hotSearchList = res.data.hotSearchList

      dispatch(_changeList(hotSearchList))
    })
    .catch(err => {
      console.log('Get hot search list error', err)
    })
}

const debounceFetchArticleList = debounce(fetchArticleList, 300)

const _changeSearch = (newSearchWord) => dispatch => {
  dispatch({
    type: CHANGE_SEARCH,
    newSearchWord
  })

  const queryParams = {
    dispatch,
    newSearchWord
  }

  debounceFetchArticleList(queryParams);
}

export const handleSearchFocus = hotSearchList => dispatch => {
  (hotSearchList.length <= 0) && dispatch(_getHotSearchList())

  dispatch(_searchFocus())
}

export const handleSearchBlur = () => dispatch => {
  dispatch(_searchBlur())
}

export const handleHotSearchMouseEnter = () => dispatch => {
  dispatch(_hotSearchMouseEnter())
}

export const handleHotSearchMouseLeave = () => dispatch => {
  dispatch(_hotSearchMouseLeave())
}

export const handleChangeHotSearchPage = (currentPage, totalPage, spinIcon) => dispatch => {
  const originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
  const originAngleNum = originAngle ? parseInt(originAngle, 10) : 0
  spinIcon.style.transform = `rotate(${originAngleNum + 360}deg)`

  if (currentPage < totalPage) {
    dispatch(_changeHotSearchPage(currentPage + 1))
  } else {
    dispatch(_changeHotSearchPage(1))
  }
}

export const handleSearchChange = (event) => dispatch => {
  dispatch(_changeSearch(event.target.value))
}

export const handleHotSearchClick = (hotSearch) => dispatch => {
  dispatch(_changeSearch(hotSearch))
}