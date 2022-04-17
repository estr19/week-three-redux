const ChangeQuantity = ({quantityFour, setQuantityFour, quantityFive, setQuantityFive, quantityEight, setQuantityEight}) => {
  const addQuantityFour = () => {
    const newQuantity = quantityFour + 1;
    setQuantityFour(newQuantity);
  }
  
  const removeQuantityFour = () => {
    if (quantityFour <= 0) return;
    const newQuantity = quantityFour - 1;
    setQuantityFour(newQuantity);
  }

  const addQuantityFive = () => {
    const newQuantity = quantityFive + 1;
    setQuantityFive(newQuantity);
  }
  
  const removeQuantityFive = () => {
    if (quantityFive <= 0) return;
    const newQuantity = quantityFive - 1;
    setQuantityFive(newQuantity);
  }
  
  const addQuantityEight = () => {
    const newQuantity = quantityEight + 1;
    setQuantityEight(newQuantity);
  }
  
  const removeQuantityEight = () => {
    if (quantityEight <= 0) return;
    const newQuantity = quantityEight - 1;
    setQuantityEight(newQuantity);
  }
  
    return (
      <div>
        <h3>4x6 <i className="fa-solid fa-square-minus" onClick={removeQuantityFour}></i>
        <span>{quantityFour}</span>
        <i className="fa-solid fa-square-plus" onClick={addQuantityFour}></i></h3>
        <h3>5x7 <i className="fa-solid fa-square-minus" onClick={removeQuantityFive}></i>
        <span>{quantityFive}</span>
        <i className="fa-solid fa-square-plus" onClick={addQuantityFive}></i></h3>
        <h3>8x10 <i className="fa-solid fa-square-minus" onClick={removeQuantityEight}></i>
        <span>{quantityEight}</span>
        <i className="fa-solid fa-square-plus" onClick={addQuantityEight}></i></h3>
      </div>
    )
  }
  
  export default ChangeQuantity;