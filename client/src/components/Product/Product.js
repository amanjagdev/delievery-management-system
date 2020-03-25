import React from 'react';
import './Product.css';

const Product = (props) => {

  const subProduct = (pro) => {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Item : {pro.product_name} </h5>
            <h6 className="card-subtitle mb-2 text-muted">Quantity : {pro.product_qty}</h6>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h2>Flat No : {props.item.fno}</h2><br/>
      <div className="row pl-4">
      {props
        .item
        .product
        .map((product) => (subProduct(product)))
}
      </div>
    </React.Fragment>
  );
}

export default Product;
