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
         console.log('uzair')
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
     getItem = (id) => {
         const product = this.state.products.find(item => item.id === id);
         return product;
     }

     handerDetails = (id) =>{
         const product = this.getItem(id);
         this.setState(()=>
         {return{detailProduct: product}
        })
         
     };
     addToCard = (id) =>{
        console.log(`hello from add To card.id ${id}`)
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