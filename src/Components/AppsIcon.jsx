import React from 'react';
import Icon from '../images/app-launcher.png';
import '../styles/header.css';


export default function AppsIcon() {
  return (
    <div className='apps-icon'>
     <img src={Icon} alt="apps launcher" style={{height:'26px'}} />
    </div>
  );
}
