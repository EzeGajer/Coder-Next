// pages/index.js

import React from 'react';
import Novedades from '@/components/novedades';
import Destacados from '@/components/productos-destacados';

const Home = () => (
  <>
    <main>
      <Novedades />
      <Destacados />
    </main>
  </>
);

export default Home;
