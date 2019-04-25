import React, { Component } from 'react';


class ProductoRealizarPedido extends Component {

           
    render (){
             
        return (

            <span  className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.nombre}<span className="badge align-top badge-pill badge-info ml-2">{this.props.cantidad}</span></h5>
                    <img alt="" src={this.props.url_imagen} width="50px" height="50px"/>
                    <h5>Total item:{this.props.precio * this.props.cantidad}€</h5>
                    <small>Precio item:{this.props.precio}€</small>
                    
                </div>
                
            </span>

            

        );

    }

}

export default ProductoRealizarPedido;