import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import RealizarPedido from '../../components/RealizarPedido/RealizarPedido';
import ListaPedidos from '../../components/ListaPedidos/ListaPedidos';
import DetallePedido from '../../components/DetallePedido/DetallePedido';
import DatosCliente from '../../components/DatosCliente/DatosCliente';
import PaginaAgradecimiento from '../../components/PaginaAgradecimiento/PaginaAgradecimiento';
import Breadcumbs from '../../components/Breadcumbs/Breadcumbs';
import Navbar from '../../components/Navbar/Navbar';
import { Route} from 'react-router-dom';


class Shop extends Component {

    state = {
        carrito: [],
        totalPrecio: 0,
        totalCantidad: 0
    }

    setCarrito = (carrito) => {
        this.setState({carrito: carrito}, () => {this.setTotal()});
    }

    setTotal = () => {
        
        let precioTotal = 0;
        let unidadadesTotal = 0;
       
        for(let i=0; i < this.state.carrito.length ; i++)
        {
            precioTotal += parseFloat(this.state.carrito[i].precio) * this.state.carrito[i].count;
            unidadadesTotal += this.state.carrito[i].count;
        }
        
        this.setState({totalPrecio: precioTotal, totalCantidad: unidadadesTotal});
        
    }
     
    render() {
        return (
            <div className="container">
                
                <Route path="/" render={(props) => <Navbar {...props} carrito={this.state.carrito} />} />
                <Route path="/" component={Breadcumbs} />
                <Route path="/" exact render={(props) => <Home {...props} setCarrito={this.setCarrito} carrito={this.state.carrito} />} />
                <Route path="/lista-pedidos" exact component={ListaPedidos} />
                <Route path="/detalle-pedido" exact render={(props) => <DetallePedido {...props} setCarrito={this.setCarrito}  />} />
                <Route path="/realizar-pedido" exact render={(props) => <RealizarPedido {...props} estado={this.state} />} />
                <Route path="/datos-cliente" exact render={(props) => <DatosCliente {...props} estado={this.state} />} />
                <Route path="/pagina-agradecimiento" exact component={PaginaAgradecimiento} />
                
                
            </div>

        );

    }


}

export default Shop;