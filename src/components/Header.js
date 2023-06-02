import { AppBar, Box, Button, Divider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 4 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
                DEMO Streaming
              </Typography>
              <Button color="inherit">Log in</Button>
              <Button variant="contained" style={{ backgroundColor: '#414141', marginLeft: '2%' }}>
                Start your free trial
              </Button>
            </Toolbar>
          </AppBar>
          <AppBar position="static">
            <Toolbar style={{ backgroundColor: '#414141' }}>
              <Typography variant="body1" component="div" sx={{ flexGrow: 4 }}>
                Popular Titles
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Divider />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
