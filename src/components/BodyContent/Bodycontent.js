import React from 'react';
import './BodyContent.css'

const BodyContent = ({ children }) => {
  return <main className='content'>{children}</main>;
};

export default BodyContent;
