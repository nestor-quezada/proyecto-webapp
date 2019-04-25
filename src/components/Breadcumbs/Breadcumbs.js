import React, { Component } from 'react';
import './Breadcumbs.css';
import { Link } from 'react-router-dom';

class Breadcumbs extends Component {
        
    render (){
        const pathname = this.props.location.pathname;
        if(pathname.localeCompare("/") === 0){

            return (
                <Link to="/">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </nav>
                </Link>)


        }else if (pathname.localeCompare("/realizar-pedido") === 0){

            return (
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Realizar pedido</li>
                    </ol>
                </nav>)

        }else if (pathname.localeCompare("/datos-cliente") === 0){

            return (
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/realizar-pedido">Realizar pedido</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Datos cliente</li>
                    </ol>
                </nav>)

        }
   
        return null;

    }

}

export default Breadcumbs;