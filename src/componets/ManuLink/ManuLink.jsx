import React from 'react'
import "./ManuLink.scss"

const ManuLink = ({Icon,text}) => {
  return (
    <div className='manuLink'>{Icon}
    <span className="manuLinkText">{text}</span>
    <span className="manuLinkTextNmae">{text ==="logout" && "(Amber)"}</span>
    </div>
  )
}

export default ManuLink