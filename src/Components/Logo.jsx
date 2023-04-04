import React from 'react'
import LogoPics from '../images/google.logo.png';


export default function Logo() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img  src={LogoPics} alt="google" style={{width: '272px', height: 'auto'}} />
    </div>
  )
}
