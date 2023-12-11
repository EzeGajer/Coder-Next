// productos-destacados.js
"use client";
import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import styles from './productos-destacados.module.css';
import { db } from '../firebase/config';
import { CartContext } from '../context/cartContext';

const ProductosDestacados = ({ productosDestacadosProp }) => {
  const [productos, setProductos] = useState(productosDestacadosProp || []);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCollection = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCollection);
        const productosData = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className={styles.grid}>
      {productos.map((producto) => (
        <div key={producto.id} className={styles.card}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.title}>{producto.nombre}</h3>
            <p className={styles.description}>{producto.descripcion}</p>
            <p className={styles.price}>{producto.precio}$</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductosDestacados;
