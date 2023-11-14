import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Iniciar Sesión</h1>
      <div className={styles.pageContent}>
        <p>Ingresa con tu cuenta para acceder a todas las funcionalidades.</p>
      </div>
    </div>
  );
};

export default Login;
