import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { removefromCart } from '../../redux/slices/cartSlice';
import { addcartItem } from '../../redux/slices/cartSlice';
import './singleproduct.css';

function SinglieProduct({product}) {
  
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cartReducer.cart);
  const curItem= cart.find(item => item.id == product.id);
  const curQuantity = curItem? curItem.quantity :0;
  return (
    <div className="SingleProduct">
      <img className="productImg"src={product.images[2]} alt={product.title} />
      <div className="productInfo">
        <h2 classname="productTitle">{product.title}</h2>
        <p classname="productPrice">{product.price}</p>
      </div>
    <div className="cartInfo">
      <button className ="button" onClick={()=>dispatch(removefromCart(product.id))}>-</button>
      <h3 style={{fontSize:"1.5rem"}}>{curQuantity}</h3>
      <button className="button" onClick={()=>dispatch(addcartItem(product.id))}>+</button>
    </div>
    </div>
  )
}

export default SinglieProduct;