import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    selectedCategory: 'ALL'
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
})

export const getSelectedCategory = state => state.photos.selectedCategory;
export const { filterCategory } = photoSlice.actions;
export default photoSlice.reducer;