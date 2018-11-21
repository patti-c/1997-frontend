function openWindow(windowName) {
  return { type: 'OPEN_WINDOW', windowName }
}

function closeWindow(){
  return { type: 'CLOSE_WINDOW' }
}

export { openWindow, closeWindow }
