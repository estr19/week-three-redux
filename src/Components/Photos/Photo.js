import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addItemToCart , getCartItems , updateQuantity } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Photo = ({photo}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const [quantityFour, setQuantityFour] = useState(0);
  const [quantityFive, setQuantityFive] = useState(0);
  const [quantityEight, setQuantityEight] = useState(0);
  const quantity = useState(quantityFour + quantityFive + quantityEight);
  const itemInCart = cartItems.some(item => item.id === photo.id);

  const clearSelection = () => {
    setQuantityFour(0);
    setQuantityFive(0);
    setQuantityEight(0);
  }

  const addToCart = (name) => {
    if (quantityFour === 0 && quantityFive === 0 && quantityEight === 0) alert('Cannot add ZERO items!')
    else if (!itemInCart) {
      dispatch(addItemToCart({photo, quantity, quantityFour, quantityFive, quantityEight}));
      clearSelection();
    } else {
      dispatch(updateQuantity({photo, quantity, quantityFour, quantityFive, quantityEight}));
    }
  }

  return (
    <div className='centered item'>
      <h2>{photo.name}</h2>
      <img src={photo.img} alt={photo.name} width='300px'/>
      <ChangeQuantity 
        quantityFour={quantityFour} setQuantityFour={setQuantityFour} 
        quantityFive={quantityFive} setQuantityFive={setQuantityFive}
        quantityEight={quantityEight} setQuantityEight={setQuantityEight}
      />
      <span><button onClick={() => clearSelection()}>clear selection</button>
      <button className="add" onClick={() => addToCart(photo.name)}>add to cart</button></span>
    </div>
  )
}

export default Photo;