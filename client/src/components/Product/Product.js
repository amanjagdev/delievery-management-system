import React, {useContext, useState} from 'react';
import './Product.css';
import {Card, Button, Alert} from 'react-bootstrap'
import {GlobalContext} from '../../context/GlobalState'

const Product = (props) => {

  const {addToCart} = useContext(GlobalContext);
  const {removeFromCart} = useContext(GlobalContext);

  const {items} = useContext(GlobalContext);
  const {cart} = useContext(GlobalContext);

  let [active,
    setActive] = useState(false);
  let [activeError,
    setActiveError] = useState(false);

  function addCart(id) {
    let flag = 1;
    cart.forEach((item) => {
      if (item.id === id && item.qty === 20) {
        flag = 0;
      }
    })
    if (flag) {
      items.forEach((item) => {
        if (item.id === id) {
          addToCart(item);
        }
      });
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 1000);
    } else {
      setActiveError(true);
      setTimeout(() => {
        setActiveError(false);
      }, 1000);
    }
  }

  return (
    <Card className="main__card" style={{
      width: '20rem'
    }}>
      <Card.Body>
        <Card.Img variant="top" src={"img/product ("+props.item.id+").png"}/>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {props.item.price}</Card.Subtitle>
        <Card.Text>

          {props.from === "cart"
            ? <React.Fragment></React.Fragment>
            : props.item.desc}
        </Card.Text>
        {(props.from === "cart")
          ? <Card.Text>
              Quantity : {props.item.qty}
            </Card.Text>
          : <React.Fragment></React.Fragment>
}
        <Button variant="dark">
          {(props.from === "cart")
            ? <Card.Link onClick={() => removeFromCart(props.item.id)}>Remove</Card.Link>
            : <Card.Link onClick={() => addCart(props.item.id)}>Add to Cart</Card.Link>
}
        </Button>
        <Card.Text>
          <br></br>
          <Alert show={active} variant="success">Product is added in cart</Alert>
          <Alert show={activeError} variant="danger">Product quantity can not be over 20</Alert>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default Product;
