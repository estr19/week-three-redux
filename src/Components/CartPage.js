import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice, getQuantityFour, getQuantityFive, getQuantityEight, clearCart } from "../redux/cartSlice";
import CartItem from "./Cart/CartItem";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const quantityFour = useSelector(getQuantityFour);
  const quantityFive = useSelector(getQuantityFive);
  const quantityEight = useSelector(getQuantityEight);
  const quantity = quantityFour + quantityFive + quantityEight;

  return (
    <div>
      <h1>It's time to check out!</h1>
      <div className='centered main'>
        <div className="cartPage">
          <img className='cartIcon' src="./cartLogo.jpg" alt="cart_logo"/>
          <h2>{quantity} items: ${totalPrice}</h2>
          <button onClick={() => dispatch(clearCart({cartItems: 0}))}>Clear Cart</button>
          <p><u>Subtotal</u>:
          <br></br>
          <strong>4x6</strong> prints - {quantityFour} @ $1/ea
          <br></br>
          <strong>5x7</strong> prints - {quantityFive} @ $1.5/ea
          <br></br>
          <strong>8x10</strong> prints - {quantityEight} @ $3/ea</p>
          {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />)}
          <button className="add">Checkout</button>
        </div>
      </div>
    </div>

  )
}

export default CartPage;