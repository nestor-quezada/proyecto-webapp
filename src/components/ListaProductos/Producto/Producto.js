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
        if(foundedProduct){
            
            for (let i = 0; i < foundedProduct.count; i++) {
                miniaturas.push(<li className="list-group-item border border-dark" ><img width="30" key={i} src={this.props.url_imagen} /></li>);
            }
           
        }
        const style = {
            backgroundImage: "url("+  this.props.url_imagen +")",
            width: "inherit",
            height: "150px",
            display: "inline-block",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"

        }
        return (

            <div className="Producto card">
                
                <div className="card-img-top" style={style}></div>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <PlusMinusInput addProduct={this.props.addProduct}  removeProduct={this.props.removeProduct} idb={this.props.idb}/>
                        <p className="card-text">{this.props.descripcion}</p>
                        <ul className="list-group">{miniaturas}</ul>
                    
                        <p className="card-text"><small className="text-muted"> Precio:{this.props.precio}€</small></p>
                        Total item: {foundedProduct ? foundedProduct.count * this.props.precio: 0 }€
                    </div>
                </div>
                

            </div>

            

        );

    }

}

export default Producto;