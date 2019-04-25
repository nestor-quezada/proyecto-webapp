import React from 'react';
import Producto from './Producto/Producto';

const ListaProductos = ( props ) => props.productos.map ((producto, index) => {
   
    return <Producto 
        addProduct = {props.addProduct}
        removeProduct = {props.removeProduct}
        cantidad = {props.carrito}
        nombre = {producto.nombre}
        precio = {producto.precio}
        descripcion = {producto.descripcion} 
        url_imagen = {producto.url_imagen}
        idb = {producto.idb}
        key = {index} />
});

export default ListaProductos;