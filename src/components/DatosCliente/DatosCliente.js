import React, { Component } from 'react';
import './DatosCliente.css';
import { Link, Redirect } from 'react-router-dom';
import axios from '../../axios';

class DatosCliente extends Component {

    

    state = {
        nombre:"",
        apellidos:"",
        email:"",
        direccion:"",
        codigoPostal:"",
        pedidos:"",        
        datosValidos:false
        
    }

    handleFormSubmit = () => {
        const data = {
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            email:this.state.email,
            direccion:this.state.direccion,
            codigoPostal:this.state.codigoPostal,
            carrito:this.props.estado.carrito,
            precioTotal:this.props.estado.totalPrecio,
            cantidadTotal:this.props.estado.totalCantidad,
            fecha: this.getFecha()
            
        }
        axios
        .post('/datos-cliente.json',data)
        .then(response => {
                this.setState({datosValidos : true});
            });

    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    getFecha = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;


    }
        
    render (){
        if(this.state.datosValidos){
            return <Redirect to='/pagina-agradecimiento' />
        }
        
      
        return (

            <div className="DatosCliente">
                
                <h1>Datos cliente</h1>

                <div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputEmail" placeholder="whatever@loquesea.com"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" value={this.state.nombre} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputEmail" placeholder="E.g. Fulgencio"/>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Dirección</label>
                            <input type="text" name="direccion" value={this.state.direccion} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputAddress" placeholder="C/Gran vía 2 Avinguda de la Granvia " />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Población</label>
                                <input type="text" name="poblacion" value={this.state.poblacion} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputCity" placeholder="L'Hospitalet de Llobregat, Barcelona"/>
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label htmlFor="codigoPostal">Códido postal</label>
                                <input type="text" name="codigoPostal" value={this.state.codigoPostal} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="codigoPostal"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Consiento que mis datos queden registrados para futuras compras
                                </label>
                            </div>
                        </div>
                        
                    </form>
                
                    
                </div>


                <Link to="/realizar-pedido" className="btn btn-primary mr-1">Volver</Link>
                <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Realizar Pedido</button>
                
            </div>

            

        );

    }

}

export default DatosCliente;