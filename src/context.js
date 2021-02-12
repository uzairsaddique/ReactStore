import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

 class  ProductProvider extends Component {
     state={
         products: [],
         detailProduct: detailProduct
     }
     componentDidMount(){
         this.setProducts();
     }
     setProducts = () =>{
         let tempProducts = [];
         storeProducts.forEach(item =>{
             const singleItem = {...item};
             tempProducts = [...tempProducts, singleItem];
         });
         this.setState(()=>{
             return {products: tempProducts};
         });
     };

     handerDetails = () =>{
         console.log("hello from detals")
     }
     addToCard = () =>{
        console.log("hello from addTocard")
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handerDetails: this.handerDetails,
                addToCard: this.addToCard

            }}>
                {this.props.children}
                
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};