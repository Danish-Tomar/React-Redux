import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadproducts } from '../../redux/slices/productSlise';
import SinglieProduct from './SinglieProduct';
import './productList.css';

function ProductList() {

const dispatch = useDispatch()
const products=useSelector(state =>state.productReducer.products)
useEffect (()=>{
  fetchData();
},[])

async function fetchData(){
  const response =  await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await response.json();
  dispatch(loadproducts(data))
}
  return (
    <div className="ProductList">{products.map(item => <SinglieProduct key={item.id} product={item}/>)}</div>
  )
}

export default ProductList;