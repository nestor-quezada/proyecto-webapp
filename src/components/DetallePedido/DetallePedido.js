import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProductoRealizarPedido from '../RealizarPedido/ProductoRealizarPedido/ProductoRealizarPedido';
import axios from '../../axios';

class DetallePedido extends Component {

    constructor(props){
        super(props);
        this.state = this.props.location.state;
    }

    deletePedido = ()=> {
        axios
        .delete('/datos-cliente/' + this.state.idb + '.json' )
        .then(response => {
                this.setState({pedidoBorrado : true});
            });
    }

    cargarEstado = () => {
        this.props.setCarrito(this.state.carrito);
        this.setState({cargarEstado : true});
    }
        
    render (){

        if(this.state.pedidoBorrado){
            return <Redirect to='/lista-pedidos' />
        }

        if(this.state.cargarEstado){
            return <Redirect to='/' />
        }
        
        var listaProductos = this.state.carrito.map((item, index)=>{
            return <ProductoRealizarPedido key={index} cantidad={item.count} nombre={item.nombre}
            precio={item.precio} url_imagen={item.url_imagen}/>
        })
      
        return (

            <div className="DetallePedido">
               
               <h1>Datos cliente</h1>

                <div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputEmail" readOnly/>
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" value={this.state.nombre} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="nombre" readOnly/>
                            </div>

                            <div className="form-group col-md-5">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" value={this.state.apellidos} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="apellidos" readOnly/>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Dirección</label>
                            <input type="text" name="direccion" value={this.state.direccion} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputAddress" readOnly />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Población</label>
                                <input type="text" name="poblacion" value={this.state.poblacion} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputCity" readOnly/>
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label htmlFor="codigoPostal">Códido postal</label>
                                <input type="text" name="codigoPostal" value={this.state.codigoPostal} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="codigoPostal" readOnly/>
                            </div>
                        </div>
                        
                        
                    </form>
                
                    
                </div>


                <h1>Lista de productos</h1>
                <div className="list-group">
                    {listaProductos}
                    <span className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Total <span className="badge align-top badge-pill badge-primary">{this.state.cantidadTotal}</span> </h5>
                            
                            <h5 className="font-weight-bold">{this.state.precioTotal}€</h5>
                            
                        </div>
                        
                    </span>
                </div>

                <Link to={{
                                pathname: '/lista-pedidos',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>
                  <button type="button" className="btn btn-primary mb-5 mt-5 mr-2">Volver</button>
                </Link>
                <button type="button" className="btn btn-primary mb-5 mt-5 mr-2" data-toggle="modal" data-target="#exampleModal" >Eliminar Pedido</button>
                
                
                <button type="button" className="btn btn-primary mb-5 mt-5" onClick={this.cargarEstado}>Cargar pedido</button>
                                         


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar pedido</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               ¡ El pedido no se podrá recuperar!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button " className="btn btn-primary btn-danger" onClick={this.deletePedido} data-dismiss="modal">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

        );

    }

}

export default DetallePedido;