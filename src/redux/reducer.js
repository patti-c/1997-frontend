import { combineReducers } from 'redux'
import uuid from 'uuid'

const windowReducer = (state=[], action) => {
  switch (action.type) {
    case 'OPEN_WINDOW':
      return [...state, {name: action.payload.name, data: action.payload.data, id: uuid()}]
    case 'CLOSE_WINDOW':
      return state.filter(w => w.id !== action.windowId)
    default:
      return state
  }
}

const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.user
    case 'LOGOUT_USER':
      return {}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  windows: windowReducer,
  user: userReducer
})

export default rootReducer
