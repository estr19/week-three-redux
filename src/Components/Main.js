import React, { useState } from 'react';
import Photos from './Photos/Photos';

function Main() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true)
    else if (scrolled <= 300) setVisible(false)
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <div>
      <h1>A tiny cat that dared to dream BIG.</h1>
      <div>
        <Photos />
      </div>
      <button className='scrollBack' onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} >
        <i className='fa-solid fa-circle-arrow-up'></i>
      </button>
    </div>
  )
}

export default Main;