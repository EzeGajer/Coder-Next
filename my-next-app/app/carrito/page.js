import React from "react";
import styles from "./carrito.module.css";

const Carrito = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Carrito de Compras</h1>
      <div className={styles.pageContent}>
        <p>Tu carrito está vacío. ¡Agrega productos para comenzar!</p>
      </div>
    </div>
  );
};

export default Carrito;
