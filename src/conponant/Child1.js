import React, { useRef } from 'react';
import {useDispatch} from "react-redux";
import { setMessage } from '../redux/slices/MessageSlice';
function Child1() {
   const dispatch=useDispatch()
    const inputRef=useRef(null);
    function handleSubmit(event){
        event.preventDefault();
        const inputText=inputRef.current.value;
        dispatch(setMessage(inputText))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"ref={inputRef}></input>
            <input type="submit"onClick={handleSubmit}></input>
        </form>
    </div>
  )
}

export default Child1