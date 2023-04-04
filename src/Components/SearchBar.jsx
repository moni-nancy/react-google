import React from 'react'
import SearchIcon from '../images/search.svg';
import Mic from '../images/mic.svg';
import Camera from '../images/camera (2).svg';


export default function SearchBar() {
  return (
    <div>
      <form className='search-input'>
      <input type="text" name='search'/>
     <img src={SearchIcon} alt="search" style={{height: '16px'}} />
      <img src={Mic} alt="mic" style={{height: '16px'}} />
      <img src={Camera} alt="camera" style={{height: '16px'}} />
      </form>
    </div>
   
  )
}
