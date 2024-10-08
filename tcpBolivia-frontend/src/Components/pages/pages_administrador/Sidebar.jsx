import React from 'react';
import { List, ListItem, ListItemText, Drawer, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DataUsageIcon from '@mui/icons-material/DataUsage';

import '../../../Styles/Styles_administrador/Sidebar.css';

const Sidebar = ({ className }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
      className={className}
    >
      <Toolbar className="sidebar-toolbar">
        <Typography variant="h6" noWrap className="sidebar-title">
          Admin Menu
        </Typography>
      </Toolbar>
      <List>
        <ListItem button component={Link} to="/Administrador/Formulario/Dat" className="sidebar-list-item">
          <DataUsageIcon sx={{ mr: 1 }} className="sidebar-icon" />
          <ListItemText primary="Gestión de Datos" classes={{ primary: 'sidebar-list-item-text' }} />
        </ListItem>
        
        {/* Agrega otros elementos del menú aquí */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
