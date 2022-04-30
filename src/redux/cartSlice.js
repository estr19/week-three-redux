import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push({
        ...action.payload.photo,
        quantity: action.payload.quantityFour + action.payload.quantityFive + action.payload.quantityEight,
        quantityFour: action.payload.quantityFour,
        quantityFive: action.payload.quantityFive,
        quantityEight: action.payload.quantityEight,
        totalPrice: action.payload.quantityFour * action.payload.photo.price.four + action.payload.quantityFive * action.payload.photo.price.five + action.payload.quantityEight * action.payload.photo.price.eight,
      })
    },
    updateQuantity: (state, action) => {
      const newCart = [];
      state.cartItems.forEach(item => {
        if (item.id === action.payload.photo.id) {
          let countNewFour = item.quantityFour + action.payload.quantityFour;
          let countNewFive = item.quantityFive + action.payload.quantityFive;
          let countNewEight = item.quantityEight + action.payload.quantityEight;
          let countNew = countNewFour + countNewFive + countNewEight;
          let totalSum = item.price.four * countNewFour + item.price.five * countNewFive + item.price.eight * countNewEight;
          const changeCart = {...item, quantity: countNew, quantityFour: countNewFour, quantityFive: countNewFive, quantityEight: countNewEight, totalPrice: totalSum};
          newCart.push(changeCart);
        } else {
          newCart.push(item);
        }
      })
      state.cartItems = newCart;
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId)
    },
    clearCart: state => {
      state.cartItems = []
    },
  },
})

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total
  }, 0)
}
export const getQuantityFour = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.quantityFour + total
  }, 0)
}
export const getQuantityFive = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.quantityFive + total
  }, 0)
}
export const getQuantityEight = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.quantityEight + total
  }, 0)
}
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;