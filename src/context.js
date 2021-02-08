import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

 class  ProductProvider extends Component {
     state={
         products: storeProducts,
         detailProduct: detailProduct
     }

     handerDetails = () =>{
         console.log("hello from detals")
     }
     addToCard = () =>{
        console.log("hello from addTocard")
    }
    tester = () =>{
        console.log('State products :', this.state.products[0].inCart);
        console.log('Dtae products :', storeProducts[0].inCart);
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