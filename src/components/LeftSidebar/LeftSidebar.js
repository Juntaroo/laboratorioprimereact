import React from 'react';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      <ul>
        <li><button><a href='https://itscipolletti.edu.ar/moodle/login/index.php'>CAMPUS</a></button></li>
        <li><button><a href='https://itscipolletti.edu.ar'>ITS</a></button></li>
        <li><button><a href='https://www.youtube.com'>YOUTUBE</a></button></li>
        <li><button><a href='https://www.google.com'>GOOGLE</a></button></li>
      </ul>
    </div>
  );
};


export default LeftSidebar;