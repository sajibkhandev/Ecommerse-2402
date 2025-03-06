import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: null,
  },
  reducers: {
    counter: (state,action) => {
      state.value+=action.payload
      
    }
  },
})

export const { counter} = counterSlice.actions

export default counterSlice.reducer