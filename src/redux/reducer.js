import { combineReducers } from 'redux'
import uuid from 'uuid'
let newState

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
      return {
        username: action.payload.user.username,
        name: action.payload.user.name,
        online: action.payload.user.online,
        hidden: action.payload.user.hidden,
        muted: action.payload.user.muted,
        friend_requests: {
          pending_requests: action.payload.pending_requests,
          desired_friendships: action.payload.desired_friendships
        }
      }
    case 'LOGOUT_USER':
      return {}
    case 'ACCEPT_REQUEST':
      newState = state
      newState.friends.push({username: action.friend})
      newState.friend_requests.pending_requests = newState.friend_requests.pending_requests.filter(req => req !== action.friend)
      return newState
    case 'DENY_REQUEST':
      newState = state
      newState.friend_requests.pending_requests = newState.friend_requests.pending_requests.filter(req => req !== action.friend)
      return newState
    case 'MODIFY_SETTINGS':
      newState = state
      newState.hidden = action.settings.hidden
      newState.muted = action.settings.muted
      return newState
      break;
    default:
      return state
  }
}

const friendsReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.payload.user.friends
    case 'LOGOUT_USER':
      return []
      case 'LOGIN_FRIEND':
        newState = [...state]
        newState.map(function(friend) {
          if(friend.username === action.friend) {
            friend.online = true
            return friend
          } else {
            return friend
          }
        })
        return newState
        break;
      case 'LOGOUT_FRIEND':
        newState = [...state]
        newState.map(function(friend) {
          if(friend.username === action.friend) {
            friend.online = false
            return friend
          } else {
            return friend
          }
        })
        return newState
        break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  windows: windowReducer,
  user: userReducer,
  friends: friendsReducer
})

export default rootReducer
