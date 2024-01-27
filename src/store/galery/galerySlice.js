import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  favoritePhotos: [],
}

const galerySlice = createSlice({
  name: "galery",
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.photos = action.payload
    },
    addToFavorite(state, action) {
      state.favoritePhotos.push(action.payload)
    },
    removeFromFavorite(state, action) {
      state.favoritePhotos = state.favoritePhotos.filter(item => item !== action.payload)
    },
  }
})

export default galerySlice.reducer
export const { addPhoto, addToFavorite, removeFromFavorite } = galerySlice.actions
