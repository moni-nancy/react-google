import React from 'react'
import Me from '../images/me-react.png'
import '../styles/header.css';


export default function Avatar() {
  return (
    <div className='apps-icon'>
      <img src={Me} alt="an avatar of me" style={{height: '26px'}} />
    </div>
  )
}
