import React, { Component } from 'react';


class ProductoRealizarPedido extends Component {

    constructor(props){
        super(props);
    }
        
    render (){
             
        return (

            <a  class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{this.props.nombre}</h5>
                    <img alt="" src={this.props.url_imagen} width="50px" height="50px"/>
                    <medium>Total item:{this.props.precio * this.props.cantidad}€</medium>
                    <small>Precio item:{this.props.precio}€</small>
                    <span class="badge badge-light">{this.props.cantidad}</span>
                </div>
                
            </a>

            

        );

    }

}

export default ProductoRealizarPedido;