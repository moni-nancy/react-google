import React from 'react'
import MenuItem from './MenuItem';
import '../styles/googleapp.css';

export default function BottomRightMenu() {
  return (

      <div className='bottom-right'>
      <MenuItem title={'About'} link={'#'} style={{ marginRight: '20px' }} />
      <MenuItem title={'Advertising'} link={'#'} style={{ marginRight: '20px' }} />
      <MenuItem title={'Business'} link={'#'} style={{ marginRight: '20px' }} />
      <MenuItem title={'How Search works'} link={'#'} style={{ marginRight: '20px'  }} />
    </div>
  )
}
