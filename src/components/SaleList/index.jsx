import { Component } from "react";
import Product from '../Product'
import './style.css'
import SubTotal from '../SubTotal'
class SaleList extends Component{
    render(){
        const { total, list, btOff } = this.props;
        
        return(
            <section className='saleList'>
                <div className='container'>
                    <h2>Pedido</h2>
                    <SubTotal total={total}/>
                    <div className='containerItens'>{list.map((item, index) => 
                        <Product key={index} idx={item.id} btOff={btOff} name={item.name} category={item.category} price={item.price} />)}</div>
                </div>
               
            </section>
        )
    }
}

export default SaleList;