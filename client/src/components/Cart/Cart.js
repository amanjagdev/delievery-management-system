import React, {useContext} from 'react';
import './Cart.css';
import Product from '../Product/Product'
import {Button} from 'react-bootstrap'

//Importing Context
import {GlobalContext} from '../../context/GlobalState';

const Cart = props => {
  const {cart} = useContext(GlobalContext);
  let ammount = 0;
  cart.forEach(item => ammount += (item.price * item.qty));

  return (
    <React.Fragment>
      <h1 className="main__title">Your Cart :</h1>
      <div className="row pl-4" >
        {//Mapping objects to be displayed
        cart.map(item => (<Product item={item} key={item.id} from="cart"/>))
}
      </div>

      <h3 className="main__title">Ready to Checkout : $ {ammount}</h3>
      <div className="main__title">
        <Button variant="success">Checkout</Button>
      </div>
    </React.Fragment>
  );
}

export default Cart;
