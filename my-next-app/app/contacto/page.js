import React from "react";
import styles from "./contacto.module.css";

const Contacto = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Contáctanos</h1>
      <div className={styles.pageContent}>
        <p>
          No dudes en ponerte en contacto con nosotros. Estamos aquí para
          ayudarte.
        </p>
      </div>
    </div>
  );
};

export default Contacto;
