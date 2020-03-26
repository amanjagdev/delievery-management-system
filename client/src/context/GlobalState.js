import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';

//Initial State 
let initialState

axios.get('http://localhost:5000/api/product/view')
  .then(res => {
      console.log("<<PRODUCT RESPONSE>>", res.data)
      initialState = res.data;
  })
  .catch(err => {
      console.log("<<PRODUCT RESPONSE>>",err)
  })


//Global Context
export const GlobalContext = createContext(initialState);

//Global Provider
const GlobalProvider = ({children}) => {

  //Actions 
  const addToCart = (data) => {
    dispatch({
      type: 'ADD_CART',
      payload: data
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: 'DELETE_CART',
      payload: id
    });
  };

  const addProduct = (data) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: data
    });
  };

  //Maintaing State
  const [state,dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
      items: state,
      addToCart,
      addProduct,
      removeFromCart
    }}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;