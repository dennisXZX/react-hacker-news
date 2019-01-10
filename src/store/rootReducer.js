import { combineReducers } from 'redux'

import headerReducer from '../common/header/headerReducer'
import searchPageReducer from '../pages/search/searchPageReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  searchPage: searchPageReducer
})

export default rootReducer