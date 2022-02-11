import { combineReducers } from 'redux'

import ingredients from './ingredients'
import cart from './cart'

export default combineReducers({
  ingredients,
  cart
})
