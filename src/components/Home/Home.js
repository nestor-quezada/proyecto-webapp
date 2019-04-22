import React, { Component } from 'react';

import axios from '../../axios';
import ListaProductos from '../../components/ListaProductos/ListaProductos';
import { Route, Link } from 'react-router-dom';


class Home extends Component {

  constructor(props){
    super(props);
    if(props.carrito){
      this.state.carrito = props.carrito;
    }
    this.state.total=this.getTotal();
  }

  state = {
      productos : []
     
  }

  // Aqui se deben realizar las peticiones AJAX
  componentDidMount(){
      axios.get('/productos.json'). 
          then(response => {
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
      });
              
    } else {
      // Si el producto ya existe solo se actuliza su cantidad
      foundedProduct.count = count;

      this.setState({
        carrito : updatedCarrito
      });
    }
    
    this.props.setCarrito(updatedCarrito);
    
    this.setState({total : this.getTotal()});


  }
   
  removeProduct = (itemId, count) => {
    // Actualizamos el estado del carrito
    let updatedCarrito = [...this.state.carrito];
    
    let foundedProduct = updatedCarrito.find(item => item.itemId === itemId);
    if(foundedProduct){
      // Si el producto ya existe solo se actuliza su cantidad
      let product = foundedProduct;
      product.count = count;
      //console.log(count)
      if(product.count == 0){
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

  render() {
      return (
          <div>
              <section className="Productos">
                  <h1 >Lista de productos</h1>
                  <div className="list-unstyled">
                    <ListaProductos addProduct={this.addProduct} removeProduct={this.removeProduct} productos={this.state.productos} carrito={this.state.carrito} />
                  </div>
                  <h2>Total: {this.state.total}€</h2>
              </section>
              <div className="container">
                <Link to={{
                                pathname: '/realizar-pedido',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: this.state.carrito
                            }}>
                  <button type="button" className="btn btn-primary mb-5 mt-5">Realizar pedido</button>
                </Link>
              </div>
          </div>

      );

  }

}

export default Home;