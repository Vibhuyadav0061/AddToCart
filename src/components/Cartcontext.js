import React, { createContext , useReducer ,useEffect } from "react";
import Cart from './Cart.js';

import { Products } from "./Products.js";

import { reducer } from "./reduser.js";
export const Contextcart = createContext();
const initialState = {
   item: Products,
   totalAmount : 0,
   totalItem :0
}
export  const Cartcontext = ({Closecart})=>{
    const [state , dispatch] = useReducer(reducer , initialState )
    const removeItem = (id)=>{
       return dispatch({
         type:"REMOVE_ITEM",
         item_id:id,
       });
    }
    const add = (id)=>{
      return dispatch({
         type:"ADD",
         item_id:id,
      });
    }
    const min = (id)=>{
      return dispatch({
         type:"MIN",
         item_id:id,
      });
    }
    useEffect(()=>{
      dispatch({type:"GET_TOTAL"})
    },[state.item])
    useEffect(()=>{
      dispatch({type:"GET_TOTAL_AMOUNT"})
    },[state.item])

      return (
      <>
      <Contextcart.Provider value={{...state , removeItem ,add,min }} >
         <Cart Closecart = {Closecart} />
         </Contextcart.Provider>
      </>
      )
}