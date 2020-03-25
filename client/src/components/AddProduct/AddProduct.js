import React, {useState} from 'react';
import './AddProduct.css';
import {Alert} from 'react-bootstrap'

const AddProduct = props => {

  const [fno, setFno] = useState(0);
  const [active,setActive] = useState(false);
  const [counter,setCounter] = useState(1);
  const [products,setProducts] = useState([{
    pname : "none",
    pqty: "none"
  }]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // setActive(true);

  }

  const handleCounter = (value) => {
      if(value){
        setCounter( counter + 1);
      }else{
        if(counter >= 2){
          setCounter(counter -1);
        }
      }
  }

  const addProductsDisplay = () => {
    const temp = [];
    for(let i =1;i<=counter;i++){
      temp.push(
      <React.Fragment key={i}>
          <h4>Product No : {i}</h4>
          <div className="form-group">
            <label htmlFor="fno">Product Name : </label>
            <input type="number" className="form-control" id="fno" value={products[i].pname} onChange={(e) => setFno(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="fno">Product Quantity : </label>
            <input type="number" className="form-control" id="fno" value={products[i]} onChange={(e) => setFno(e.target.value)}></input>
          </div>
      </React.Fragment>
      )
    }
    return temp;
  }

  return (
    <React.Fragment >
      <div className="container pt-4">
        <h1>Add Product</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="fno">Flat No : </label>
            <input type="number" className="form-control" id="fno" value={fno} onChange={(e) => setFno(e.target.value)}></input>
          </div>

          
          <div className="row">
            <button className="btn btn-primary ml-3 mr-4" onClick={() => handleCounter(0)}>-</button> 
                 <div className="counter">{counter}</div>
            <button className="btn btn-primary ml-4" onClick={() => handleCounter(1)}>+</button>
          </div>

          <br/><br/>
          <h3>Now add products : </h3><br/>

          {addProductsDisplay()}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Alert show={active} variant="success">Product is added in cart</Alert>


      </div>
    </React.Fragment>
  );
}

export default AddProduct;
