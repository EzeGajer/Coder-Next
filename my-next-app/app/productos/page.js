import React from 'react';
import styles from './productos.module.css';

const Productos = () => {
  return (
    
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Nuestros Productos</h1>
        <div className={styles.pageContent}>
          <p>Descubre nuestra amplia selección de productos de alta calidad.</p>
        </div>
      </div>
    
  );
};

export default Productos;
