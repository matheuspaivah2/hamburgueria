import { Component } from "react";
import Product from '../Product'
import './style.css'


class MenuContainer extends Component{
    render(){
        const { products, productsFilter, addProduct, btOff} = this.props;
        return(
            <div className='containerProduct'>
                
            
                {productsFilter[0] === undefined ? products.map((item, index) => 
                <Product key={index} idx={item.id} name={item.name} btOff={btOff} category={item.category} price={item.price} addProduct={addProduct}/> )
                 :
                productsFilter.map((item, index) => 
                <Product key={index} idx={item.id} name={item.name} btOff={btOff} category={item.category} price={item.price} addProduct={addProduct}/> ) }
                
            </div>


        )
    }
}

export default MenuContainer;