import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem:[]
  },
  reducers: {
    addtocart: (state,action) => {

        let alldata=state.cartItem.find(item=>item.title===action.payload.title)
        
        if(alldata){

            alldata.quantity+=1
        }else{
            state.cartItem.push({...action.payload,quantity:1})
        }

        
        
        
      
    }
  },
})

export const { addtocart} = cartSlice.actions

export default cartSlice.reducer