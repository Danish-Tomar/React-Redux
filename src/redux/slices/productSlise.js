import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'productSlice',
    initialState:{
        products:[]
    },
    reducers:{
        loadproducts:(state,action) =>{
            state.products = action.payload;
        }
    }
})
export const{loadproducts}=productSlice.actions;
export default productSlice.reducer;