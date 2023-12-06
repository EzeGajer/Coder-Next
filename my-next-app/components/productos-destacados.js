// productos-destacados.js
import { useClient } from 'next/data-client';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import styles from './productos-destacados.module.css';
import { db } from '../../firebase/config';

const ProductosDestacados = ({ productosDestacadosProp }) => {
  const [productos, setProductos] = useState(productosDestacadosProp || []);
  useClient(); // Marcar este componente como Client Component

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
  }, []); // Asegúrate de pasar un array vacío como dependencia para que useEffect se ejecute solo al montar el componente

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
            <p className={styles.price}>{producto.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductosDestacados;
