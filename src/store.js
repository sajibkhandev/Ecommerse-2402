import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import breadCrumbs from './slices/breadCrumbs'
import cartSlice from './slices/cartSlice'

export default configureStore({
  reducer: {
    counterFuntion:counterSlice,
    breadFunction:breadCrumbs,
    addtocart:cartSlice
  },
})