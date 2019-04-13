import React, { Component } from 'react';

import axios from '../../axios';
import Home from '../../components/Home/Home';
import RealizarPedido from '../../components/RealizarPedido/RealizarPedido';
import ListaPedidos from '../../components/ListaPedidos/ListaPedidos';
import DatosCliente from '../../components/DatosCliente/DatosCliente';
import Breadcumbs from '../../components/Breadcumbs/Breadcumbs';
import { Route, Link } from 'react-router-dom';


class Shop extends Component {

    

    render() {

        return (
            <div className="container">
                <Route path="/" component={Breadcumbs} />
                <Route path="/" exact component={Home} />
                <Route path="/lista-pedidos" exact component={ListaPedidos} />
                <Route path="/realizar-pedido" exact component={RealizarPedido} />
                <Route path="/datos-cliente" exact component={DatosCliente} />
            </div>

        );

    }


}

export default Shop;