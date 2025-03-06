import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import breadCrumbs from './slices/breadCrumbs'

export default configureStore({
  reducer: {
    counterFuntion:counterSlice,
    breadFunction:breadCrumbs
  },
})