// not-found.js

import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.message}>Lo sentimos, la página que estás buscando no existe.</p>
        <div className={styles.imageContainer}>
          <img
            src="https://edteam-media.s3.amazonaws.com/blogs/big/2ab53939-9b50-47dd-b56e-38d4ba3cc0f0.png"
            alt="Not Found"
            className={styles.image}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/">
            <button className={styles.button}>Volver al Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
