import { configureStore } from '@reduxjs/toolkit';
import photos from './photoSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    photos,
    cart
  },
})