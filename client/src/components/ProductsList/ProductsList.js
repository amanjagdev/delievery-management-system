import React, {useContext} from 'react';
import './ProductsList.css';
import Product from '../Product/Product';

//Importing Context
import {GlobalContext} from '../../context/GlobalState';

const ProductsList = props => {

  const {items} = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h1 className="main__title">Products List</h1>
      <div className="row pl-4">
        {
        //Mapping objects to be displayed
        items.map(item => (<Product item={item} key={item.id} from="products"/>))
        }
      </div>

    </React.Fragment>
  );
}

export default ProductsList;
