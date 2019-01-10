import axios from 'axios'

export const SEARCH_FOCUS = 'Header.SEARCH_FOCUS'
export const SEARCH_BLUR = 'Header.SEARCH_BLUR'
export const GET_HOT_SEARCH_LIST = 'Header.GET_HOT_SEARCH_LIST'
export const HOT_SEARCH_MOUSE_ENTER = 'Header.HOT_SEARCH_MOUSE_ENTER'
export const HOT_SEARCH_MOUSE_LEAVE = 'Header.HOT_SEARCH_MOUSE_LEAVE'
export const CHANGE_PAGE = 'Header.CHANGE_PAGE'

const _changeList = (hotSearchList) => ({
  type: GET_HOT_SEARCH_LIST,
  hotSearchList,
  totalPage: Math.ceil(hotSearchList.length / 7)
})

export const searchFocus = () => ({
  type: SEARCH_FOCUS,
})

export const searchBlur = () => ({
  type: SEARCH_BLUR,
})

export const hotSearchMouseEnter = () => ({
  type: HOT_SEARCH_MOUSE_ENTER
})

export const hotSearchMouseLeave = () => ({
  type: HOT_SEARCH_MOUSE_LEAVE
})

export const changePage = (newCurrentPage) => ({
  type: CHANGE_PAGE,
  newCurrentPage
})

export const getHotSearchList = () => (dispatch) => {
  axios.get('api/hotSearchList.json')
    .then((res) => {
      const hotSearchList = res.data.hotSearchList

      dispatch(_changeList(hotSearchList))
    })
    .catch(() => {
      console.log('Get hot search list error')
    })
}