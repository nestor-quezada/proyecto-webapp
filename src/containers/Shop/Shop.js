import React, { Component } from 'react';

import axios from '../../axios';
import Home from '../../components/Home/Home';
import RealizarPedido from '../../components/RealizarPedido/RealizarPedido';
import ListaPedidos from '../../components/ListaPedidos/ListaPedidos';
import DetallePedido from '../../components/DetallePedido/DetallePedido';
import DatosCliente from '../../components/DatosCliente/DatosCliente';
import PaginaAgradecimiento from '../../components/PaginaAgradecimiento/PaginaAgradecimiento';
import Breadcumbs from '../../components/Breadcumbs/Breadcumbs';
import { Route, Link } from 'react-router-dom';


class Shop extends Component {

    constructor(props){
        super(props);
    }

    state = {
        carrito: []
    }

    setCarrito = (carrito) => {
        this.setState({carrito: carrito});

    }
     
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="https://firebasestorage.googleapis.com/v0/b/dsm-react.appspot.com/o/logo-tienda.jpg?alt=media&token=3b037ad7-c2b1-4d58-8f15-7bbb84eaab4b" width="30" height="30" class="d-inline-block align-top" alt=""/>ZapasShop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link className="nav-link" to={{
                                pathname: '/',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: this.state.carrito
                            }}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={{
                                pathname: '/lista-pedidos',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: this.state.carrito
                            }}>Pedidos</Link>
                            </li>
                            </ul>
                    </div>
                </nav>
                <Route path="/" component={Breadcumbs} />
                <Route path="/" exact render={(props) => <Home {...props} setCarrito={this.setCarrito} carrito={this.state.carrito} />} />
                <Route path="/lista-pedidos" exact component={ListaPedidos} />
                <Route path="/detalle-pedido" exact component={DetallePedido} />
                <Route path="/realizar-pedido" exact render={(props) => <RealizarPedido {...props} carrito={this.state.carrito} />} />
                <Route path="/datos-cliente" exact render={(props) => <DatosCliente {...props} carrito={this.state.carrito} />} />
                <Route path="/pagina-agradecimiento" exact component={PaginaAgradecimiento} />
                
                
            </div>

        );

    }


}

export default Shop;