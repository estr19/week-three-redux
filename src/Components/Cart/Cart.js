import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice, getQuantityFour, getQuantityFive, getQuantityEight, clearCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const quantityFour = useSelector(getQuantityFour);
  const quantityFive = useSelector(getQuantityFive);
  const quantityEight = useSelector(getQuantityEight);
  const quantity = quantityFour + quantityFive + quantityEight;

  // const clearSelection = () => {
  //   quantityFour = 0;
  //   quantityFive(0);
  //   quantityEight(0);
  // }

  return (
    <div id="items" className='centered'>
      <div className="cartRow">
        <img className='cartIcon' src="./cartLogo.jpg" alt="cart_logo"/>
        {/* <i className="fa-solid fa-cart-circle-xmark" onClick={() => dispatch(clearCart({cartItems: 0}))}></i> */}
      </div>
      <h2>Estimated Total ({quantity} items): ${totalPrice}</h2>
      {/* <span><button onClick={() => clearSelection()}>Reset Selections</button></span> */}
        <button onClick={() => dispatch(clearCart({cartItems: 0}))}>Empty Cart</button>
      <p style={{textAlign: 'center'}}><u>Subtotal</u>:
      <br></br>
      <strong>4x6</strong> prints - {quantityFour} @ $1/ea
      <br></br>
      <strong>5x7</strong> prints - {quantityFive} @ $1.5/ea
      <br></br>
      <strong>8x10</strong> prints - {quantityEight} @ $3/ea</p>
      {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index} />)}
    </div>
  )
}

export default Cart;