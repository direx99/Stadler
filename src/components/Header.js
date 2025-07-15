import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <List sx={{ width: 240 }}>
      {navLinks.map(link => (
        <ListItem key={link.name} disablePadding>
          <ListItemButton component="a" href={link.href} onClick={handleNavClick}>
            <ListItemText primary={link.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" sx={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: 1 }}>Stadler Family Resort</div>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <nav>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} style={{ color: 'white', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 