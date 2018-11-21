import React from 'react'
import './DesktopIcon.css'

function getIcon(iconName) {
  return require(`../../assets/icons/${iconName}.png`)
}

const DesktopIcon = ({fileName}) => {
  return (
    <img className="icon-image" src={getIcon(fileName)} alt={fileName}/>
  )
}

export default DesktopIcon
