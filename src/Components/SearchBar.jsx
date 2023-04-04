import React from 'react'
import SearchIcon from '../images/search.svg';
import Mic from '../images/mic.svg';
import Camera from '../images/camera (2).svg';


export default function SearchBar() {
  return (
    <div>
      <form>
      <input type="text" name='search'/>
     <img src={SearchIcon} alt="an avatar of me" style={{height: '26px'}} />
      <img src={Mic} alt="an avatar of me" style={{height: '26px'}} />
      <img src={Camera} alt="an avatar of me" style={{height: '26px'}} />
      </form>
    </div>
   
  )
}
