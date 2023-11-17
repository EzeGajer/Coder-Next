// productos-destacados.js
import React from 'react';
import styles from './productos-destacados.module.css';

const productosDestacados = [
  {
    id: 1,
    nombre: 'Producto 1',
    precio: '$50.00',
    imagen: 'https://parecidas.com/img_es/tag/thumb/41/3142.jpg',
    descripcion: 'Descripción del Producto 1',
  },
  {
    id: 2,
    nombre: 'Producto 2',
    precio: '$40.00',
    imagen: 'https://m.media-amazon.com/images/I/71eU1IW6r1L._AC_UL400_.jpg',
    descripcion: 'Descripción del Producto 2',
  },
  {
    id: 3,
    nombre: 'Producto 3',
    precio: '$35.00',
    imagen: 'https://m.media-amazon.com/images/I/51PIFv%2BIElL._AC_SY200_QL15_.jpg',
    descripcion: 'Descripción del Producto 3',
  },
  {
    id: 4,
    nombre: 'Producto 4',
    precio: '$60.00',
    imagen: 'https://m.media-amazon.com/images/I/51xF6NdvYoL._AC_UL400_.jpg',
    descripcion: 'Descripción del Producto 4',
  },
  {
    id: 5,
    nombre: 'Producto 5',
    precio: '$48.00',
    imagen: 'https://m.media-amazon.com/images/I/71NNZ6pfRML._AC_SY200_QL15_.jpg',
    descripcion: 'Descripción del Producto 5',
  },
  {
    id: 6,
    nombre: 'Producto 6',
    precio: '$55.00',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_916512-MLA26400692147_112017-O.webp',
    descripcion: 'Descripción del Producto 6',
  },
];

const ProductosDestacados = ({ productosDestacadosProp }) => {
  const productos = productosDestacadosProp || productosDestacados;

  return (
    <div className={styles.grid}>
      {productos.map((producto) => (
        <div key={producto.id} className={styles.card}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className={styles.image}
          />
          <h3 className={styles.title}>{producto.nombre}</h3>
          <p className={styles.description}>{producto.descripcion}</p>
          <p className={styles.price}>{producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductosDestacados;
