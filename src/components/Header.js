import { AppBar, Box, Button, Divider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="body1" component="div" sx={{ flexGrow: 4 }}>
                  Popular Titles
                </Typography>
              </Link>
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
