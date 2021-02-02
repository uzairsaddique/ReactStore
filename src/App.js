import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { Route, Switch, IndexRoute, Link} from 'react-router-dom';
import { ProductProvider } from './context';


 class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
      
    <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route  path="/details" component={Details}/>
          <Route  path="/cart" component={Cart}/>
          <Route   component={Default}/>
    </Switch>
  
        
      </React.Fragment>
    );
  }
}
 
export default App