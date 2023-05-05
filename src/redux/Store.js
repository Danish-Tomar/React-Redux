import { configureStore} from "@reduxjs/toolkit";
import productReducer from './slices/productSlise';
import cartReducer from './slices/cartSlice'
export default configureStore({
    reducer:{
        productReducer,
        cartReducer
    }
})