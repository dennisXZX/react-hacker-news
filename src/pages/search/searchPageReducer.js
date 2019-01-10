import {
  UPDATE_HIT_ARTICLE_LIST
} from './searchPageActions'

const defaultState = {
  hitArticleList: []
}

const _updateHitArticleList = (state, action) => {
  return {
    ...state,
    hitArticleList: action.hitArticleList
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_HIT_ARTICLE_LIST:
      return _updateHitArticleList(state, action)
    default:
      return state
  }
}