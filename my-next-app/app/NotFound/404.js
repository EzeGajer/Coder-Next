import React from "react";
import styles from "./404.module.css";

const NotFound = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>404 - Página no encontrada</h1>
      <div className={styles.pageContent}>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
