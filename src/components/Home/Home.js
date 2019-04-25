import React, { Component } from 'react';
import axios from '../../axios';
import ListaProductos from '../../components/ListaProductos/ListaProductos';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import { Redirect } from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props);
    if(props.carrito){
      this.state.carrito = props.carrito;
    }
    this.state.total=this.getTotal();
    this.state.isValidPedido = false;
    this.state.showAlert = false;
  }

  state = {
      productos : []
  }

  // Aqui se deben realizar las peticiones AJAX
  componentDidMount(){
      axios
      .get('/productos.json')
      .then(response => {
              // Split de los datos recibidos y actualizacion del estado
              let productos = [];
            
              for (let key in response.data) {
                  productos.push({
                      ...response.data[key],
                      idb: key
                  });
              }

              this.setState({productos : productos});

          });
  }

  addProduct = (itemId, count) => {
    // Actualizamos el estado del carrito
    let updatedCarrito = [...this.state.carrito];
    
    let foundedProduct = updatedCarrito.find(item => item.itemId === itemId);
    if(!foundedProduct){
      // En caso de que el producto no exista en el carrito se crea
      
      let defaultProduct = this.state.productos.find(item => item.idb === itemId);
      
      let newProduct = {itemId: itemId, count : count, 
        nombre:defaultProduct.nombre, 
        url_imagen: defaultProduct.url_imagen,
        precio: defaultProduct.precio };

      updatedCarrito.push(newProduct);
      this.setState({
        carrito : updatedCarrito
      }, () => { this.setState({ total: this.getTotal() })});
              
    } else {
      // Si el producto ya existe solo se actuliza su cantidad
      foundedProduct.count = count;

      this.setState({
        carrito : updatedCarrito
      }, () => { this.setState({ total: this.getTotal() }) });
    }
    this.props.setCarrito(updatedCarrito);
    
    //this.setState({total : this.getTotal()});

  }
   
  removeProduct = (itemId, count) => {
    // Actualizamos el estado del carrito
    let updatedCarrito = [...this.state.carrito];
    
    let foundedProduct = updatedCarrito.find(item => item.itemId === itemId);
    if(foundedProduct){
      // Si el producto ya existe solo se actuliza su cantidad
      let product = foundedProduct;
      product.count = count;
      
      if(product.count === 0){
        updatedCarrito.splice(foundedProduct, 1); 
      }

      this.setState({
        carrito : updatedCarrito
      });
    }

    this.props.setCarrito(updatedCarrito);
    this.setState({total : this.getTotal()});

  }

  getTotal = () => {
    let total = 0;
    if(this.state.carrito && this.state.carrito.length > 0){
      for(let i=0; i< this.state.carrito.length; i++){
        total += this.state.carrito[i].count*parseFloat(this.state.carrito[i].precio);
      }

    }
    return total;
  }

  handleRealizarPedido = () => {
    if(this.state.carrito.length > 0){
      this.setState({isValidPedido : true, showAlert:false});
    }else{
      this.setState({isValidPedido : false, showAlert:true});
    }

  }
  
  render() {
    if(this.state.isValidPedido){
      return <Redirect to='/realizar-pedido' />
    }

      return (
          <div>
              <section className="Productos">
                  <h1 >Lista de productos</h1>
                  <AlertMessage show={this.state.showAlert} />
                  <div className="list-unstyled">
                    <ListaProductos addProduct={this.addProduct} removeProduct={this.removeProduct} productos={this.state.productos} carrito={this.state.carrito} />
                  </div>
                  <h2>Total: {this.state.total}€</h2>
              </section>
              <div className="container">
                <button type="button" className="btn btn-primary mb-5 mt-5" onClick={this.handleRealizarPedido}>Realizar pedido</button>
              </div>
          </div>

      );

  }

}

export default Home;