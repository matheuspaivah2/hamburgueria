import { Component } from "react";
import ButtonAddToCar from '../ButtonAddToCar'
import './style.css'

class Product extends Component{
    render(){
        const {addProduct, category, name, price, idx, btOff} = this.props
        return(
            <div className='product'>
                <p className='productName'>{name}</p>
                <p>{category}</p>
                <p>{price}</p>
                {console.log(btOff)}
                {btOff ? <></> : <ButtonAddToCar addProduct={addProduct} idx={idx}/>}
                {/* <ButtonAddToCar addProduct={addProduct} idx={idx}/> */}
            </div>
        )
    }
}

export default Product;