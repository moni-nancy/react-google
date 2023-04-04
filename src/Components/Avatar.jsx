import React from 'react'
import Me from '../images/me-react.png'

export default function Avatar() {
  return (
    <div>
      <img src={Me} alt="an avatar of me" style={{height: '26px'}} />
    </div>
  )
}
