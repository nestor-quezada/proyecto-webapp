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
                miniaturas.push(<img width="30" key={i} src={this.props.url_imagen} />);
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
                        <h5 class="card-title">{this.props.nombre}</h5>
                        <PlusMinusInput addProduct={this.props.addProduct}  removeProduct={this.props.removeProduct} idb={this.props.idb}/>
                        <p className="card-text">{this.props.descripcion}</p>
                        {miniaturas}
                    
                        <p className="card-text"><small class="text-muted"> Precio:{this.props.precio}€</small></p>
                        Total item: {foundedProduct ? foundedProduct.count * this.props.precio: 0 }€
                    </div>
                </div>
                

            </div>

            

        );

    }

}

export default Producto;