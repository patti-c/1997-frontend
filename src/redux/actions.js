function openWindow(payload) {
  return { type: 'OPEN_WINDOW', payload }
}

function closeWindow(windowId){
  return { type: 'CLOSE_WINDOW', windowId }
}

function loginUser(user) {
  return { type: 'LOGIN_USER', user}
}

function logoutUser() {
  return { type: 'LOGOUT_USER' }
}

export { openWindow, closeWindow, loginUser, logoutUser }
