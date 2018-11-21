import { combineReducers } from 'redux'

const windowReducer = (state=[], action) => {
  switch (action.type) {
    case 'OPEN_WINDOW':
      return [...state, action.windowName]
    case 'CLOSE_WINDOW':
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  windows: windowReducer
})

export default rootReducer
