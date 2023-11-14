import React from "react";
import styles from "./admin.module.css";

const Admin = () => {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminSidebar}>
        <h1 className={styles.adminTitle}>Panel de Administración</h1>
        <div className={styles.adminMenu}>
          <div className={styles.menuItem}>Usuarios</div>
          <div className={styles.menuItem}>Productos</div>
          <div className={styles.menuItem}>Pedidos</div>
          <div className={styles.menuItem}>Configuración</div>
        </div>
      </div>
      <div className={styles.adminContent}>
        {/* Contenido de administración aquí */}
        <p>
          Bienvenido al panel de administración. Aquí puedes gestionar usuarios,
          productos, pedidos y configuraciones.
        </p>
      </div>
    </div>
  );
};

export default Admin;
