import React, { Component } from 'react';

import axios from '../../axios';
import Home from '../../components/Home/Home';
import RealizarPedido from '../../components/RealizarPedido/RealizarPedido';
import ListaPedidos from '../../components/ListaPedidos/ListaPedidos';
import DatosCliente from '../../components/DatosCliente/DatosCliente';
import Breadcumbs from '../../components/Breadcumbs/Breadcumbs';
import { Route, Link } from 'react-router-dom';


class Shop extends Component {

    constructor(props){
        super(props);
        console.log("construyendo otra vez");
    }

    state = {
        carrito: []
    }

    setCarrito = (carrito) => {
        this.setState({carrito: carrito});

    }
     
    render() {
        console.log(this.state.carrito);
        return (
            <div className="container">
                <Route path="/" component={Breadcumbs} />
                <Route path="/" exact render={(props) => <Home {...props} setCarrito={this.setCarrito} carrito={this.state.carrito} />} />
                <Route path="/lista-pedidos" exact component={ListaPedidos} />
                <Route path="/realizar-pedido" exact render={(props) => <RealizarPedido {...props} carrito={this.state.carrito} />} />
                <Route path="/datos-cliente" exact component={DatosCliente} />
            </div>

        );

    }


}

export default Shop;