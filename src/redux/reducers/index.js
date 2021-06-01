import { combineReducers } from "redux";

import categories from './categories'
import providers from './providers'

const rootReducer = combineReducers({
  categories,
  providers
})

export default rootReducer