import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProductoRealizarPedido from '../RealizarPedido/ProductoRealizarPedido/ProductoRealizarPedido';

class DetallePedido extends Component {

    constructor(props){
        super(props);
        this.state = this.props.location.state;
    }
        
    render (){
        
        var listaProductos = this.state.carrito.map((item, index)=>{
            return <ProductoRealizarPedido cantidad={item.count} nombre={item.nombre}
            precio={item.precio} url_imagen={item.url_imagen}/>
        })
      
        return (

            <div className="DetallePedido">
               
               <h1>Datos cliente</h1>

                <div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail">Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputEmail" readOnly/>
                            </div>

                            <div className="form-group col-md-6">
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" value={this.state.nombre} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputEmail" readOnly/>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Dirección</label>
                            <input type="text" name="direccion" value={this.state.direccion} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputAddress" readOnly />
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Población</label>
                                <input type="text" name="poblacion" value={this.state.poblacion} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="inputCity" readOnly/>
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label for="codigoPostal">Códido postal</label>
                                <input type="text" name="codigoPostal" value={this.state.codigoPostal} onChange={(event)=>this.handleInputChange(event)} class="form-control" id="codigoPostal" readOnly/>
                            </div>
                        </div>
                        
                        
                    </form>
                
                    
                </div>


                <h1>Lista de productos</h1>
                <div className="list-group">
                    {listaProductos}
                    <a  className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Total <span className="badge align-top badge-pill badge-primary"> 0</span> </h5>
                            
                            <medium className="font-weight-bold">0€</medium>
                            
                        </div>
                        
                    </a>
                </div>

                <Link to={{
                                pathname: '/',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: ""
                            }}>
                  <button type="button" className="btn btn-primary mb-5 mt-5">Eliminar Pedido</button>
                </Link>
                <Link to={{
                                pathname: '/',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: ""
                            }}>
                  <button type="button" className="btn btn-primary mb-5 mt-5">Cargar pedido</button>
                </Link>

            </div>

            

        );

    }

}

export default DetallePedido;