import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime();
      state.cartItems.push({
        id: timeId,
        name: action.payload.photo.name,
        photoId: action.payload.photo.id,
        quantity: action.payload.quantityFour + action.payload.quantityFive + action.payload.quantityEight,
        quantityFour: action.payload.quantityFour,
        quantityFive: action.payload.quantityFive,
        quantityEight: action.payload.quantityEight,
        totalPrice: action.payload.quantityFour * action.payload.photo.price.four + action.payload.quantityFive * action.payload.photo.price.five + action.payload.quantityEight * action.payload.photo.price.eight,
      })
    },
    // updateQuantity: (state, action) => {
      
    // },
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
export const { addItemToCart, removeItemFromCart, clearCart,  } = cartSlice.actions;
export default cartSlice.reducer;

// const item = state.cartItems.find(item => item.name === state.cartItems.name);
// if (!state.cartItems.includes(item)) {
//   state.cartItems.push({
//   id: timeId,
//   photoId: action.payload.photo.id,
//   quantity: action.payload.quantity,
//   quantityFour: action.payload.quantityFour,
//   quantityFive: action.payload.quantityFive,
//   quantityEight: action.payload.quantityEight,
//   totalPrice: action.payload.quantityFour * action.payload.photo.price.four + action.payload.quantityFive * action.payload.photo.price.five + action.payload.quantityEight * action.payload.photo.price.eight,
// })
// }