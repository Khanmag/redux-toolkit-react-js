import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGalleryPhotos } from "../../api/gallery";

export const fetchPhotos = createAsyncThunk(
  'gallery/fetchPhotos',
  async (_, {rejectWithValue}) => {
    try {
      const data = await getGalleryPhotos()
      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const initialState = {
  photos: [],
  favoritePhotos: [],
  isLoading: false,
  hasError: false,
  // status: 'pending' | 'rejected' | 'fulfilled'
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true
      state.hasError = false
    })
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.isLoading = false
      state.hasError = true
      console.error(action.payload)
    })
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.isLoading = false
      state.photos = action.payload
    })
  }

})

export default gallerySlice.reducer
export const { addPhoto, addToFavorite, removeFromFavorite } = gallerySlice.actions
