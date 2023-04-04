import React from 'react';
import '../styles/googleapp.css';


export default function MenuItem(props){
  
  
  return (
    <div>
      <a id='link' href={props.href} style={ props.style}>
        {props.title}
        </a>
    </div>
  );
}