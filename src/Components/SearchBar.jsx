import React from 'react'
import SearchIcon from '../images/search.svg';
import Mic from '../images/mic.svg';
import Camera from '../images/camera (2).svg';
import '../styles/googleapp.css';


export default function SearchBar() {
  return (
    <div>
      <form className='search-input'>
        <div className='input-container'>
          <img src={SearchIcon} alt="search" className='search-icon' />
         <input id='input' type='text' name='search' className='search-field' />

        <div className='right-icons'>
        <img src={Mic} alt="mic" className='mic-icon' />
        <img src={Camera} alt="camera" className='camera-icon' />
         </div>
      </div>
      </form>
    </div>
   
  );
}
