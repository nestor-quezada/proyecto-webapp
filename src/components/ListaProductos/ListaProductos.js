import React, { Component } from 'react';
import Producto from './Producto/Producto';

const ListaProductos = ( props ) => props.productos.map ((producto, index) => {
   
    return <Producto 
        clicked = {() => props.clicked(producto.idb)} 
        nombre = {producto.nombre} 
        url_imagen = {producto.url_imagen}
        key = {index} />
});

export default ListaProductos;