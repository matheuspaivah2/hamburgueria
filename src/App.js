
import './App.css';
import { Component } from 'react';
import MenuContainer from './components/MenuContainer'
import SaleList from './components/SaleList'
import logo from './Lovepik_com-401256352-cartoon-burger-illustration.png'


class App extends Component {

  state = {
    products: [
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    ],
    filteredProducts: [],

    currentSale: { total: 0, saleDetails: [] },

    item: '',

    control: false,

    
    
    }
    
    

    showProducts = () =>{
      const { products, filteredProducts, control, item } = this.state

      this.setState({filteredProducts: products.filter((prod) => item.toLowerCase() === prod.name.toLowerCase())})
      
      if ( filteredProducts[0] === undefined ){
          
        this.setState({control: !control})

      } else {
        this.setState({filteredProducts: []})
        this.setState({control: !control})
        
      }
      
    }
    
    
      
        
    sumPrice = () =>{
     
      
      const { saleDetails, total } = this.state.currentSale;
      
     this.setState({total: saleDetails.reduce((acc, curr) => {
        return acc + curr.price},0)} )
     
      
    }
        
    
  
    handleClick = (productId) =>{
      const { products, currentSale } = this.state
      const { saleDetails } = currentSale;
      // const productAdd = products.find(product => product.id === productId)
      
      if(! saleDetails.includes(products[productId - 1])){
        this.setState({saleDetails: saleDetails.push(products.find((item) => item.id === productId))})
        this.sumPrice()
        
        
      }else{
        alert('O produto já foi adicionado!')
      }


      //Alternativa
      // saleDetails.every(prod => prod.id !== productId) && 
      // this.setState({currentSale: {saleDetails: [...saleDetails,productAdd], total: saleDetails.reduce((acc, curr) => {
      //   return acc + curr.price},0) }})

    }


  render(){

    const { products, item, filteredProducts, control, currentSale, total } = this.state;
    

    return (
      <div className="App">
        <div className='containerInput'>
          <header>
          
            <img className='logo' src={logo} alt='logo'></img>
            <h1>PAIVA'S BURGUER</h1>
          </header>
          <nav>
          <label className='labelPesquisa' for='pesquisa'>Pesquisar:</label>
            <input type="text" name="pesquisa" id="" value={item} disabled={control} onChange={(e) => {

              this.setState({
                item: e.target.value,
                filteredProducts: products.filter((prod) => prod.name.slice(0, item.length + 1).toLocaleLowerCase() === e.target.value.toLowerCase()) 
              })
              
            }}/>
          </nav>
          

          {/* <button onClick={this.showProducts}>{control ? 'Limpar' : 'Pesquisar'}</button> */}
        </div>
          
        

          <MenuContainer control={control} btOff={false} products={products} item={item} productsFilter={filteredProducts} addProduct={this.handleClick}/> 

          {currentSale.saleDetails[0] ? <SaleList total={total} list={currentSale.saleDetails} btOff={true}/> : null}
          
        
      </div>
    );
  }
}

export default App;
