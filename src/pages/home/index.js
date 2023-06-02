import { Button } from '@mui/material';
import placeholder from 'assets/placeholder.png';
import Cover from 'components/Cover';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Button href="/series">
        <Cover image={placeholder} title="Popular Series" subtitle="SERIES" />
      </Button>
      <Button href="/movie">
        <Cover image={placeholder} title="Popular Movies" subtitle="MOVIES" />
      </Button>
    </div>
  );
};

export default Home;
