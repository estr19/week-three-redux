import { useDispatch } from "react-redux";
import data from "../../data/catalog";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const photos = data.find(item => item.id === cartItem.photoId);
  const total = photos.price.four * cartItem.quantityFour + photos.price.five * cartItem.quantityFive + photos.price.eight * cartItem.quantityEight;

  return (
    <p className='cartItem'>{cartItem.quantity} {cartItem.quantity === 1 ? 'copy' : 'copies'} of "{photos.name}" - &nbsp;<i><strong>${total}</strong></i>&nbsp;
      <i className="fa-solid fa-trash-can" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}></i>
    </p>
  )
}

export default CartItem;