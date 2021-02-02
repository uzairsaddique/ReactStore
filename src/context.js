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