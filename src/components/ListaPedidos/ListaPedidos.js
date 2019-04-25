import React, { Component } from 'react';
import './ListaPedidos.css';
import Pedido from './Pedido/Pedido'
import axios from '../../axios';

class ListaPedidos extends Component {

  
    state = {
        clientes : []
    }

    componentDidMount(){
        axios
        .get('/datos-cliente.json')
        .then(response => {
                // Split de los datos recibidos y actualizacion del estado
                let clientes = [];
            
                for (let key in response.data) {
                    clientes.push({
                        ...response.data[key],
                        idb: key
                    });
                }

                this.setState({clientes : clientes});
                
            });
    }
        
    render (){
       
        const ListaPedidos = this.state.clientes.map ((pedido, index) => {
            return <Pedido usuario = {pedido.nombre} fecha={pedido.fecha} key={index} num={index} datosPedido={pedido}/>
        });
        

        return (

            <div className="ListaPedidos">
                
                <h1>Lista de pedidos</h1>
                <div className="list-group">
                    {ListaPedidos}
                </div>
            </div>
            

        );

    }

}

export default ListaPedidos;