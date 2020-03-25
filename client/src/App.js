import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Components
import Navigation from './components/Navigation/Navigation'
import ProductsList from './components/ProductsList/ProductsList'
import DefaultPage from './components/DefaultPage/DefaultPage'
import AddProduct from './components/AddProduct/AddProduct';


const App = () => {
  return (
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={AddProduct}/>
          <Route path="/view" exact component={ProductsList}/>
          <Route component={DefaultPage}/>
        </Switch>
      </Router>
  );
}

export default App;
