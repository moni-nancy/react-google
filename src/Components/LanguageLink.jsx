import React from 'react'
import MenuItem from './MenuItem';

export default function LanguageLink() {
  return (
    <div>
      <p>Google offered:</p>
       <MenuItem text={'Hausa'} />
       <MenuItem text={'Igbo'}  />
       <MenuItem text={'EdeYoruba'}  />
       <MenuItem text={'NigerianPidgin'} />
      
    </div>
  );
}
