import { combineReducers } from 'redux'

import headerReducer from '../common/header/headerReducer'

const rootReducer = combineReducers({
  header: headerReducer
})

export default rootReducer