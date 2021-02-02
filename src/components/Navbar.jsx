import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';
import './../App.css';

 class Navbar extends Component {
    render() {
        return (
           < NavWrapper className ="navbar navbar-expand-sm   navbar-dark px-sm-5">
               <Link to ='/'>
                   <img src ={logo} alt="store" className="navbav-brand"/>

               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item mr-5">
                       <Link to="/" className="nav-link">Product</Link>
                       </li>
                       </ul>
                       
                       <Link to="/cart" className = "ml-auto">
                           <ButtonContainer>
                               <span className="mr-2">
                                   <i className="fas fa-cart-plus"/></span>
                             
                              my cart
                           </ButtonContainer>
                       </Link>
           </ NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`
   background: var(--mainBlue) !important;
    .nav-link {
     color: var(--mainWhite) !important;
     font-size: 1.3rem !important;
     text-transform: capitalize !important;
 }
`;

export default Navbar