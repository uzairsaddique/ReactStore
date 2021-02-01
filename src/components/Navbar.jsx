import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

 class Navbar extends Component {
    render() {
        return (
           <nav className ="navbar navbar-expand-sm  bg-primary navbar-dark px-sm-5">
               <Link to ='/'>
                   <img src ={logo} alt="store" className="navbav-brand"/>

               </Link>
               <ul className="navbar-nav align-item-center">
                   <li className="nav-item mr-5">
                       <Link to="/" className="nav-link">Product</Link>


                       <Link to="/cart" className = "ml-auto">
                           <ButtonComtainer>
                               <span className="mr-2">  <i className="fas fa-cart-plus"/></span>
                             
                              My cart
                           </ButtonComtainer>
                       </Link>

                   </li>

               </ul>

           </nav>
        )
    }
}
const ButtonComtainer = styled.button`
text-transfrom: capitalized;
font-size: 1.4rem:
background: transparent:
border: 0.05rem solid var(--lightBlue);
`;
export default Navbar