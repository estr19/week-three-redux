import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Photo = ({photo}) => {
  const dispatch = useDispatch();
  const [quantityFour, setQuantityFour] = useState(0);
  const [quantityFive, setQuantityFive] = useState(0);
  const [quantityEight, setQuantityEight] = useState(0);
  const quantity = useState(quantityFour + quantityFive + quantityEight);

  const clearSelection = () => {
    setQuantityFour(0);
    setQuantityFive(0);
    setQuantityEight(0);
  }
  
  //if quantity < 1 alert;

  // const addItem = (id) => {
  //   const drug = data.find(drug => drug.id === id);
  //   if (!cart.includes(drug)) {
  //     setCart([...cart, drug]);
  //   }
  // }

  return(
    <div className='centered item'>
      <h2>{photo.name}</h2>
      <img src={photo.img} alt={photo.name} width='300px'/>
      <ChangeQuantity 
        quantityFour={quantityFour} setQuantityFour={setQuantityFour} 
        quantityFive={quantityFive} setQuantityFive={setQuantityFive}
        quantityEight={quantityEight} setQuantityEight={setQuantityEight}
      />
      <span><button onClick={() => clearSelection()}>clear selection</button>
      <button className="add" onClick={() => dispatch(addItemToCart({photo, quantity, quantityFour, quantityFive, quantityEight}))}>add to cart</button></span>
    </div>
  )
}

export default Photo;