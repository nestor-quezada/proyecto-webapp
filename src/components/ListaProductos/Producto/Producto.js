import React, { Component } from 'react';
import './Producto.css';
import  PlusMinusInput from '../../PlusMinusInput/PlusMinusInput'

class Producto extends Component {

    constructor(props){
        super(props);
    }
        
    render (){

        return (

            <div className="Producto">
                <img width="50" src={this.props.url_imagen} onClick={this.props.clicked} />
                {this.props.nombre}
                <PlusMinusInput/>                
            </div>

        );

    }

}

export default Producto;