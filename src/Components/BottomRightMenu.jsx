import React from 'react'
import MenuItem from './MenuItem';
import '../styles/googleapp.css';

export default function BottomRightMenu() {
  return (

      <div className='bottom-right'>
      <MenuItem title={'Privacy'} link={'#'} style={{ marginRight: '20px' }} />
      <MenuItem title={'Terms'} link={'#'} style={{ marginRight: '20px' }} />
      <MenuItem title={'Settings'} link={'#'} style={{ marginRight: '20px' }} />
    </div>
  )
}
