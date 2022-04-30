import { useDispatch } from "react-redux";
import data from "../../data/catalog";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const photos = data.find(item => item.id === cartItem.id);
  const total = photos.price.four * cartItem.quantityFour + photos.price.five * cartItem.quantityFive + photos.price.eight * cartItem.quantityEight;

  return (
    <div className="centered">
      <img src={photos.img} alt={photos.name} width='80px'/>
      <p className='cartItem'><i className="fa-solid fa-trash-can" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}></i> &nbsp; {cartItem.quantity} {cartItem.quantity === 1 ? 'print' : 'prints'} of "{photos.name}" - &nbsp;<i><strong>${total}</strong></i>&nbsp;</p>
    </div>
  )
}

export default CartItem;