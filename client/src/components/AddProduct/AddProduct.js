import React, {useState} from 'react';
import './AddProduct.css';
import {Alert} from 'react-bootstrap'
import axios from 'axios';

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
    console.log(products,fno);
    
    //Replace this with your rest api path
    axios.post('https://dmsrestapi.herokuapp.com/api/product/add', {
      fno: fno,
      products: products
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setActive(true);
      setTimeout(() => {
          setActive(false)
      }, 1000);

  }

  const handleCounter = (value) => {
      if(value){
        products.push({
          pname : "none",
          pqty: "none"
        });
        setCounter( counter + 1);
        
      }else{
        if(counter >= 2){
          products.pop();
          setCounter(counter -1);
        }
      }
  }

  const addProductsDisplay = () => {
    const temp = [];
    for(let i =0;i<counter;i++){
      temp.push(
      <React.Fragment key={i}>
          <h4>Product No : {i+1}</h4>
          <div className="form-group">
            <label htmlFor={"pname"+ i}>Product Name : </label>
            <input type="text" className="form-control" id={"pname"+ i} onChange={(e) => (products[i].pname = e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor={"pqty"+ i}>Product Quantity : </label>
            <input type="text" className="form-control" id={"pqty"+ i}  onChange={(e) => (products[i].pqty = e.target.value)}></input>
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
            <div className="btn btn-primary ml-3 mr-4" onClick={() => handleCounter(0)}>-</div> 
                 <div className="counter">{counter}</div>
            <div className="btn btn-primary ml-4" onClick={() => handleCounter(1)}>+</div>
          </div>

          <br/><br/>
          <h3>Now add products : </h3><br/>

          {addProductsDisplay()}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Alert show={active} variant="success">Products are added succesfully</Alert>


      </div>
    </React.Fragment>
  );
}

export default AddProduct;
