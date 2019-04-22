import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Pedido extends Component {

    constructor(props){
        super(props);
    }
        
    render (){
      
        return (

            <div className="Pedido">
                               

                <Link className="nav-link list-group-item list-group-item-action flex-column align-items-start" to={{
                    pathname: '/detalle-pedido',
                    hash: '#submit',
                    search: '?quick-submit=true',
                    state: this.props.datosPedido
                    }}>
               
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Nº pedido: {this.props.num}</h5>
                        <p className="mb-1">Usuario: {this.props.usuario}</p>
                        <small>{this.props.fecha}</small>
                    </div>
                    
                </Link>

            </div>

            

        );

    }

}

export default Pedido;