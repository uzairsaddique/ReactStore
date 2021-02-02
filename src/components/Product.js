import React, { Component } from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'

 class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper>
               <div className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                   <div className="card" style={{width: '24 rem'}}>
                       <div className="img-container "
                       onClick={()=>console.log("you are log in bro ")}>
                           <Link to="/details" >
                               <img src={img} alt="product" className="card-img-top"/>
                           </Link>
                           <button className="cart-btn" disabled={inCart? true: false} onClick={()=>{console.log("ADD TO CARD ")}}>
                           {inCart? (<p className="text-capitalize mb-0" disabled>in inCart</p>):(<i className="fas fa-cart-plus"/>)}
                           </button>
                       </div>
                       </div>

                </div>
            </ProductWrapper>
        )
    }
}
 const ProductWrapper = styled.div`
 
 `
export default Product