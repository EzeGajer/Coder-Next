// pages/index.js

import React from 'react';
import Novedades from '@/components/novedades';
import Destacados from '@/components/productos-destacados';
import { CartProvider } from '../context/cartContext';

const Home = () => (
  <CartProvider>
    <>
      <main>
        <Novedades />
        <Destacados />
      </main>
    </>
  </CartProvider>
);

export default Home;
