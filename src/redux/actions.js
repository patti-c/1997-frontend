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

export { openWindow, closeWindow, loginUser, logoutUser, acceptFriendRequest, denyFriendRequest }
