import React, { Component } from 'react';
import './DatosCliente.css';
import { Route, Link, Redirect } from 'react-router-dom';
import axios from '../../axios';

class DatosCliente extends Component {

    constructor(props){
        super(props);
    }

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
            pedidos:this.state.pedidos
        }
        axios.post('/datos-cliente.json',data). 
            then(response => {
                this.setState({datosValidos : true});
            });

    }

    handleInputChange = (event) => {
        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value });
    }
        
    render (){
        if(this.state.datosValidos){
            return <Redirect to='/' />
        }
        
      
        return (

            <div className="DatosCliente">
                
                <h1>Datos cliente</h1>

                <div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail">Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputEmail" placeholder="whatever@loquesea.com"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" value={this.state.nombre} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputEmail" placeholder="E.g. Fulgencio"/>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Dirección</label>
                            <input type="text" name="direccion" value={this.state.direccion} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputAddress" placeholder="C/Gran vía 2 Avinguda de la Granvia, " />
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Población</label>
                                <input type="text" name="poblacion" value={this.state.poblacion} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputCity" placeholder="L'Hospitalet de Llobregat, Barcelona"/>
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label for="codigoPostal">Códido postal</label>
                                <input type="text" name="codigoPostal" value={this.state.codigoPostal} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="codigoPostal"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Consiento que mis datos queden registrados para futuras compras
                                </label>
                            </div>
                        </div>
                        
                    </form>
                
                    
                </div>


                <Link to="/" className="btn btn-primary mr-1">Volver</Link>
                <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Realizar Pedido</button>
                
            </div>

            

        );

    }

}

export default DatosCliente;