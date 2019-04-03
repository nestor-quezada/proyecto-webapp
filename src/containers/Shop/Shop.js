import React, { Component } from 'react';

import axios from '../../axios';
import ListaProductos from '../../components/ListaProductos/ListaProductos';


class Shop extends Component {

    state = {
        productos : [],
        carrito : []
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
          let newProduct = {itemId: itemId, count : count};
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
           

    }
    prueba = () => {
      console.log(this.state.carrito)
    }
    removeProduct = (itemId, count) => {
      // Actualizamos el estado del carrito
      let updatedCarrito = [...this.state.carrito];
      
      let foundedProduct = updatedCarrito.find(item => item.itemId === itemId);
      if(foundedProduct){
        // Si el producto ya existe solo se actuliza su cantidad
        let product = foundedProduct;
        product.count = count;
        console.log(count)
        if(product.count == 0){
          updatedCarrito.splice(foundedProduct, 1); 
        }

        this.setState({
          carrito : updatedCarrito
        });
      }

      

  }

    render() {

        return (
            <div>
                <section className="Productos">
                    <h1 onClick={this.prueba}>Lista de productos</h1>
                    <div class="card-group">
                      <ListaProductos addProduct={this.addProduct} removeProduct={this.removeProduct} productos={this.state.productos} carrito={this.state.carrito} />
                    </div>
                </section>
            </div>

        );

    }


}

export default Shop;