import { Component } from "react";

class ButtonAddToCar extends Component{
    render(){
        const { addProduct, idx } = this.props
        return(
            <button onClick={() => addProduct(idx)}>Adicionar</button>
            
        )
    }
}

export default ButtonAddToCar;