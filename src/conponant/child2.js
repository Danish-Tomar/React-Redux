import React from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Child2() {
    const message=useSelector(state => state.messageReducer.message)
  return (
    <div>Data from Child 1:{message}
    <AiOutlineShoppingCart/>
    </div>
  )
}

export default Child2;