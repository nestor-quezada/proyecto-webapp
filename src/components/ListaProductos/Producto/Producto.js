import React, { Component } from 'react';
import './Producto.css';
import  PlusMinusInput from '../../PlusMinusInput/PlusMinusInput'

class Producto extends Component {

    constructor(props){
        super(props);
    }
        
    render (){

        let miniaturas = [];
        let foundedProduct = this.props.cantidad.find(item => item.itemId === this.props.idb);
        
        const style = {
            
            padding: "0px !important",
            margin: "0px",
            borderRadius: "390px",
            padding: "0.1rem 0.1rem",
            boxShadow: "2px 1px 3px #888888",
            overflow: "hidden"
                
        }
        
        if(foundedProduct){
            
            for (let i = 0; i < foundedProduct.count; i++) {
                miniaturas.push(<li className="list-group-item" style={style}><img width="20" key={i} src={this.props.url_imagen} /></li>);
            }
           
        }

        
        
        return (

            

            <li class="media">
                
                
                <img className="mr-3" src={this.props.url_imagen} width="150px" alt="Generic placeholder image"></img>
                <div className="col-sm">
                    
                    <h5 className="mt-0 mb-1 ">{this.props.nombre}</h5>
                    <p className="card-text">{this.props.descripcion}</p>
                    <ul className="row">{miniaturas}</ul>
                
                    
                </div>
                <div className="col-sm">
                    <p className="card-text"><small className="text-muted"> Precio:{this.props.precio}€</small></p>
                        Total item: {foundedProduct ? foundedProduct.count * this.props.precio: 0 }€
                </div>
                <div className="col-sm">
                    <PlusMinusInput addProduct={this.props.addProduct}  removeProduct={this.props.removeProduct} idb={this.props.idb}/>
                </div>
            </li>

            

        );

    }

}

export default Producto;