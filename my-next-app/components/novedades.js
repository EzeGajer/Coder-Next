// novedades.js

import React from 'react';
import styles from './novedades.module.css';

const Novedades = () => {
  // Mock data para novedades
  const novedades = [
    { id: 1, titulo: '¡Nuevo Modelo de Televisor!', descripcion: 'Descubre la última tecnología en entretenimiento.' },
    { id: 2, titulo: 'Oferta Especial de la Semana', descripcion: 'Aprovecha nuestra oferta exclusiva en electrodomésticos.' },
  ];

  return (
    <div className={styles.novedades}>
      <h2 className={styles.title}>Novedades, Ofertas y Productos destacados</h2>
      <div className={styles.novedadesContainer}>
        {novedades.map((novedad) => (
          <div key={novedad.id} className={styles.novedad}>
            <h3>{novedad.titulo}</h3>
            <p>{novedad.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novedades;
