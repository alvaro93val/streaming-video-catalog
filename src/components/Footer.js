import { Box, Grid, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as facebook } from '../assets/social/facebook-white.svg';
import { ReactComponent as instagram } from '../assets/social/instagram-white.svg';
import { ReactComponent as twitter } from '../assets/social/twitter-white.svg';
import { ReactComponent as appstore } from '../assets/store/app-store.svg';
import { ReactComponent as playstore } from '../assets/store/play-store.svg';
import { ReactComponent as windowsstore } from '../assets/store/windows-store.svg';

const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 2 }}
      style={{ backgroundColor: '#414141' }}
      // position="absolute"
      // bottom="0px"
      // width="100%"
    >
      <Grid container direction="column" justifyContent="center" alignItems="flex-start">
        <Grid item margin={4}>
          <Typography variant="subtitle1" color="white">
            Home &nbsp; | &nbsp; Terms and Conditions &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp;
            Collection Statement &nbsp; | &nbsp; Help &nbsp; | &nbsp; Manage Account
          </Typography>
          <Typography variant="body2" color="white">
            Copyright © 2016 DEMO Streaming. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item marginLeft={4}>
            <SvgIcon component={facebook} inheritViewBox style={{ width: '1em', height: '1em' }} />
            <SvgIcon
              component={twitter}
              inheritViewBox
              style={{ width: '1em', height: '1em', marginLeft: '1em' }}
            />
            <SvgIcon
              component={instagram}
              inheritViewBox
              style={{ width: '1em', height: '1em', marginLeft: '1em' }}
            />
          </Grid>
          <Grid item marginRight={4}>
            <SvgIcon
              component={appstore}
              inheritViewBox
              style={{ width: '5em', height: '5em', marginRight: '1em' }}
            />
            <SvgIcon
              component={playstore}
              inheritViewBox
              style={{ width: '5em', height: '5em', marginRight: '1em' }}
            />
            <SvgIcon
              component={windowsstore}
              inheritViewBox
              style={{ width: '5em', height: '5em' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
