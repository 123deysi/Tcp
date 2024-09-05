import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

import styles from '../../../Styles/Styles_administrador/AdminLayout.css';
import FormularioCaso from './FormularioCaso';

const AdminLayout = () => {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.mainContent}>
        <Routes>
          <Route path="#" element={<FormularioCaso />} />
          {/* Agrega otras rutas de administrador aquí */}
        </Routes>
      </div>
    </div>
  );
};
export default AdminLayout;
