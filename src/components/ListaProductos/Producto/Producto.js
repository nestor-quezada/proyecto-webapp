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
                miniaturas.push(<img width="20" key={i} src={this.props.url_imagen} />);
            }
           
        }
        return (

            <div className="Producto">
                <img width="50" src={this.props.url_imagen} />
                {this.props.nombre}
                <PlusMinusInput addProduct={this.props.addProduct}  removeProduct={this.props.removeProduct} idb={this.props.idb}/>
                {miniaturas}
                Precio:{this.props.precio}
                Total item: {foundedProduct ? foundedProduct.count * this.props.precio: 0 }

            </div>

        );

    }

}

export default Producto;