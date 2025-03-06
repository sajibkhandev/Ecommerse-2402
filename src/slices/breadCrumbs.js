import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbs = createSlice({
  name: 'breadCrumbs',
  initialState: {
    currentValue:"",
    preiousValue:""
  },
  reducers: {
    breads: (state,action) => {

      state.preiousValue=state.currentValue
      state.currentValue=action.payload
      
      
    }
  },
})

export const { breads} = breadCrumbs.actions

export default breadCrumbs.reducer