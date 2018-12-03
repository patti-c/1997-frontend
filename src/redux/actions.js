function openWindow(payload) {
  return { type: 'OPEN_WINDOW', payload }
}

function closeWindow(windowId){
  return { type: 'CLOSE_WINDOW', windowId }
}

function loginUser(payload) {
  return { type: 'LOGIN_USER', payload}
}

function logoutUser() {
  return { type: 'LOGOUT_USER' }
}

function acceptFriendRequest(friend) {
  return { type: 'ACCEPT_REQUEST', friend }
}

function denyFriendRequest(friend) {
  return { type: 'DENY_REQUEST', friend }
}

function loginFriend(friend) {
  return { type: 'LOGIN_FRIEND', friend }
}

function logoutFriend(friend) {
  return { type: 'LOGOUT_FRIEND', friend }
}

function modifySettings(settings) {
  return { type: 'MODIFY_SETTINGS', settings }
}

export {
  openWindow,
  closeWindow,
  loginUser,
  logoutUser,
  acceptFriendRequest,
  denyFriendRequest,
  loginFriend,
  logoutFriend,
  modifySettings
}
