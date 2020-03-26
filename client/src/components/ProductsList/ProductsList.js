import React, {useState} from 'react';
import axios from 'axios';
import './ProductsList.css';
import Product from '../Product/Product';

const ProductsList = props => {

  const [plist, setPlist] = useState([]);

  //Replace this with your api path
  axios.get('https://dmsrestapi.herokuapp.com/api/product/view')
  .then(res => {
    setPlist(res.data);
  })
  .catch(err => {
    console.log("<<PRODUCT RESPONSE>>",err)
  })

  return (
    <React.Fragment>
      <h1 className="main__title">Details of all the products</h1>
      <div className="pl-4">
      {
        plist.map((data) => <Product item={data} key={data.id} />)
      }
      </div>

    </React.Fragment>
  );
}

export default ProductsList;
