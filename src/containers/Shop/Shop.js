import React, { Component } from 'react';
import axios from '../../axios';
import ListaProductos from '../../components/ListaProductos/ListaProductos';


class Shop extends Component {

    state = {
        productos : [],
        selectedItemId : null
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

    postSelectedHandler = (id) => {
        this.setState({selectedItemId: id});
   
    }

    render() {

        return (
            <div>
                <section className="Productos">
                    <h1>Lista de productos</h1>
                    <ListaProductos clicked ={this.postSelectedHandler} productos={this.state.productos} />
                </section>
            </div>

        );

    }


}

export default Shop;