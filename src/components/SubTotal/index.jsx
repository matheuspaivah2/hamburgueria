import { Component } from "react";
import './style.css'

class SubTotal extends Component{
    render(){

        const { total } = this.props;
        
        return(
            <h3>SubTotal: R${total.toFixed(2)}</h3>
        )
    }
}

export default SubTotal;