import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './Components/About';
import Video from './Components/Video';
import Main from './Components/Main';
import CartPage from './Components/CartPage';
import { useSelector } from "react-redux";
import { getQuantityFour, getQuantityFive, getQuantityEight } from "./redux/cartSlice";
import './index.css';
import Cart from './Components/Cart/Cart';

function App() {
  const quantityFour = useSelector(getQuantityFour);
  const quantityFive = useSelector(getQuantityFive);
  const quantityEight = useSelector(getQuantityEight);
  const quantity = quantityFour + quantityFive + quantityEight;
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <Router>
        <nav className='top'>
          <div className='left'>
            <Link to='/' className='link' >Home</Link>
            <Link to='/videos' className='link' >Videos</Link>
            <Link to='/about' className='link' >About</Link>
          </div>
          <div className='right'>
            <Link to='/cart' className='link' >Cart</Link>
            <span className='badge' onClick={() => setIsShown(!isShown)}>{quantity}</span>
            {isShown && (
              <Cart />
            )}
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/videos' element={<Video />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/home' element={<Main />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
        <nav className='bottom'>
          <p className='disclaimer'>DISCLAIMER: THIS WEBSITE IS FOR ENTERTAINING AND ENJOYMENT PURPOSES ONLY.<br></br>
            The information, including but not limited to, text, graphics, imag</p>
        </nav>
      </Router>
    </div>
  );
}

export default App;
