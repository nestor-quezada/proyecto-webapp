import React, { Component } from 'react';
import './DatosCliente.css';
import { Link, Redirect } from 'react-router-dom';
import axios from '../../axios';
import AlertMessage from '../../components/AlertMessage/AlertMessage';

class DatosCliente extends Component {

    state = {
        nombre:"",
        apellidos:"",
        email:"",
        direccion:"",
        codigoPostal:"",
        pedidos:"",        
        datosValidos:false,
        showAlert:false
        
    }

    handleFormSubmit = () => {
        
        const data = {
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            email:this.state.email,
            direccion:this.state.direccion,
            codigoPostal:this.state.codigoPostal,
            carrito:this.props.estado.carrito,
            poblacion: this.state.poblacion,
            precioTotal:this.props.estado.totalPrecio,
            cantidadTotal:this.props.estado.totalCantidad,
            fecha: this.getFecha()
            
        }

        const datosValidar = {
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            email:this.state.email,
            direccion:this.state.direccion,
            codigoPostal:this.state.codigoPostal,
                    
        }

        const entries = Object.entries(datosValidar)

        for (const [campo, valor] of entries) {
            if(valor == null || String(valor).trim() == "" ){
                this.setState({showAlert : true});
               return;
               
            }
            
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
        const alertMessage = "Debe rellenar todos los campos."; 

        if(this.state.datosValidos){
            return <Redirect to='/pagina-agradecimiento' />
        }
      
        return (

            <div className="DatosCliente">
                
                <h1>Datos cliente</h1>
                <AlertMessage show={this.state.showAlert} message={alertMessage}/>
                <div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputEmail" placeholder="whatever@loquesea.com"/>
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" value={this.state.nombre} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="nombre" placeholder="E.g. Fulgencio"/>
                            </div>

                            <div className="form-group col-md-5">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" value={this.state.apellidos} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="apellidos" placeholder="E.g. Lopez Aguilar"/>
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