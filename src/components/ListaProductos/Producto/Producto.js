import React, { Component } from 'react';
import './Producto.css';
import  PlusMinusInput from '../../PlusMinusInput/PlusMinusInput'

class Producto extends Component {
         
    render (){
        
        let miniaturas = [];
        let foundedProduct = this.props.cantidad.find(item => item.itemId === this.props.idb);
        
        const style = {
            
            
            margin: "0px",
            borderRadius: "0px",
            padding: "0.1rem 0.1rem",
            boxShadow: "0px 0px 9px #888888",
            overflow: "hidden"
                
        }
        
        if(foundedProduct){
            
            for (let i = 0; i < foundedProduct.count; i++) {
                miniaturas.push(<li className="list-group-item" style={style} key={i}><img width="20"  src={this.props.url_imagen} alt="miniatura"/></li>);
            }
           
        }

        
        
        return (

            <li className="media">
                
                
                <img className="mr-3" src={this.props.url_imagen} width="150px" alt="Generic placeholder"></img>
                <div className="col-sm">
                    
                    <h5 className="mt-0 mb-1 ">{this.props.nombre}</h5>
                    <p className="card-text">{this.props.descripcion}</p>
                    <ul className="row">{miniaturas}</ul>
                
                    
                </div>
                <div className="col-sm">
                    <p className="card-text"><small className="text-muted"> Precio:{this.props.precio}€</small></p>
                        Total item: {foundedProduct ? foundedProduct.count * this.props.precio: 0 }€
                </div>
                <div className="col-sm-2">
                    <PlusMinusInput addProduct={this.props.addProduct} removeProduct={this.props.removeProduct} idb={this.props.idb} cantidad={foundedProduct ? foundedProduct.count : 0 }/>
                </div>
            </li>

            

        );

    }

}

export default Producto;