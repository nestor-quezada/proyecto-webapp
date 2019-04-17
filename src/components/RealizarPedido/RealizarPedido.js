import React, { Component } from 'react';
import './RealizarPedido.css';
import ProductoRealizarPedido from './ProductoRealizarPedido/ProductoRealizarPedido';
import DatosCliente from '../DatosCliente/DatosCliente';
import { Route, Link } from 'react-router-dom';

class RealizarPedido extends Component {

    constructor(props){
        super(props);
        console.log(this.props.carrito);
        if(!this.props.location.state){
            this.props.location.state = this.props.carrito;
        }
        this.state.totales = this.getTotal();
        
    }

    state = {
        precioTotal:0,
        totales: {}
    }
        
    getTotal = () => {
        
        let precioTotalUpdated = 0;
        let unidadadesTotalUpdated = 0;
       
        for(let i=0; i < this.props.location.state.length ; i++)
        {
            precioTotalUpdated += parseFloat(this.props.location.state[i].precio);
            unidadadesTotalUpdated += this.props.location.state[i].count;
            console.log(this.props.location.state[i].precio)
        }
        
        
        return {
            precio: precioTotalUpdated, cantidad: unidadadesTotalUpdated
        }
    }

    render (){

        
        var listaProductos = this.props.location.state.map((item, index)=>{
           return <ProductoRealizarPedido cantidad={item.count} nombre={item.nombre}
           precio={item.precio} url_imagen={item.url_imagen}/>
        })

        return (

            <div className="RealizarPedido">
                
                <h1>Confirmar pedido</h1>
                <div className="list-group">
                    {listaProductos}
                    <a  className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Total <span className="badge align-top badge-pill badge-primary"> {this.state.totales.cantidad}</span> </h5>
                            
                            <medium className="font-weight-bold">{this.state.totales.precio}€</medium>
                            
                        </div>
                        
                    </a>
                </div>
                
                <div className="container">
                    
                        <Link to="/"><button type="button" className="btn btn-primary mr-1 mt-3 mb-5">Volver</button></Link>
                    
                    
                        <Link to={{
                                        pathname: '/datos-cliente',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                            
                                    }}><button type="button" className="btn btn-primary mt-3 mb-5">Continuar</button></Link>
                    
                
                </div>
               
           

            </div>
            
            
            

        );

    }

}

export default RealizarPedido;