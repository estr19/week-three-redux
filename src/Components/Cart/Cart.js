import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice, getQuantityFour, getQuantityFive, getQuantityEight, clearCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = ({isShown, setIsShown}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const quantityFour = useSelector(getQuantityFour);
  const quantityFive = useSelector(getQuantityFive);
  const quantityEight = useSelector(getQuantityEight);
  const quantity = quantityFour + quantityFive + quantityEight;

  return (
    <div id="items" className='centered'>
      <i className="fa-solid fa-xmark"  onClick={() => setIsShown(!isShown)}></i>
      <div className="cartRow">
        <img className='cartIcon' src="./cartLogo.jpg" alt="cart_logo"/>
      </div>
      <button onClick={() => dispatch(clearCart({cartItems: 0}))}>Empty Cart</button>
      <h2>Estimated Total ({quantity} items): ${totalPrice}</h2>
      {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index} />)}
    </div>
  )
}

export default Cart;