import { Box, Grid, SvgIcon, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as facebook } from '../assets/social/facebook-white.svg';
import { ReactComponent as instagram } from '../assets/social/instagram-white.svg';
import { ReactComponent as twitter } from '../assets/social/twitter-white.svg';
import { ReactComponent as appstore } from '../assets/store/app-store.svg';
import { ReactComponent as playstore } from '../assets/store/play-store.svg';
import { ReactComponent as windowsstore } from '../assets/store/windows-store.svg';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 4 }}>
      <Toolbar style={{ backgroundColor: '#414141' }}>
        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
          <Typography variant="body2" color="white">
            Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage
            Account
          </Typography>
          <Typography variant="subtitle1" color="white">
            Copyright © 2016 DEMO Streaming. All Rights Reserved.
          </Typography>

          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <SvgIcon
                component={facebook}
                inheritViewBox
                style={{ width: '1em', height: '1em', marginLeft: '1em' }}
              />
              <SvgIcon
                component={instagram}
                inheritViewBox
                style={{ width: '1em', height: '1em', marginLeft: '1em' }}
              />
              <SvgIcon
                component={twitter}
                inheritViewBox
                style={{ width: '1em', height: '1em', marginLeft: '1em' }}
              />
            </Grid>
            <Grid item>
              <SvgIcon
                component={appstore}
                inheritViewBox
                style={{ width: '5em', height: '5em', marginLeft: '1em' }}
              />
              <SvgIcon
                component={playstore}
                inheritViewBox
                style={{ width: '5em', height: '5em', marginLeft: '1em' }}
              />
              <SvgIcon
                component={windowsstore}
                inheritViewBox
                style={{ width: '5em', height: '5em', marginLeft: '1em' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
};

export default Footer;
