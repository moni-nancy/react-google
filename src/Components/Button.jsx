import React from 'react';
import '../styles/googleapp.css';


export default function Button(props) {
  return (
    <div>
      <button id='button'>{props.title}</button>
    </div>
  )
}
