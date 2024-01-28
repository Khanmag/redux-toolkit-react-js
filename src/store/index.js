import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import likesSlice from "./likes/likesSlice";
import gallerySlice from "./gallery/gallerySlice";


const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    auth: authSlice,
    likes: likesSlice,
    gallery: gallerySlice,
  }
})
export default store

 