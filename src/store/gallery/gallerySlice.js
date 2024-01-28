import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  favoritePhotos: [],
}

const gallerySlice = createSlice({
  name: "gallery",
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

export default gallerySlice.reducer
export const { addPhoto, addToFavorite, removeFromFavorite } = gallerySlice.actions
