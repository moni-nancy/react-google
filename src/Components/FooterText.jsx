import React from 'react'
import Carbon from '../images/carbon.png';
import '../styles/googleapp.css';


export default function FooterText() {
  return (
    <div>
      <p id='link'> <img src={Carbon} alt="Carbon" style={{height: '16px'}} />Carbon neutral since 2007</p>
    </div>
  )
}
