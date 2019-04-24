import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Navbar extends Component {

    constructor(props){
        super(props);
    }
        
    render (){
      
        return (

           
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src="https://firebasestorage.googleapis.com/v0/b/dsm-react.appspot.com/o/logo-tienda.jpg?alt=media&token=3b037ad7-c2b1-4d58-8f15-7bbb84eaab4b" width="30" height="30" className="d-inline-block align-top" alt=""/>ZapasShop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link className="nav-link" to={{
                                pathname: '/',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: this.props.carrito
                            }}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/lista-pedidos"
                            >Pedidos</a>
                            </li>
                            </ul>
                    </div>
                </nav>

            

            

        );

    }

}

export default Navbar;