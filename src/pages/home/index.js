import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ height: '60%' }}>
      <h1>HOME</h1>
      <p>
        <Link to="/movies">MOVIES</Link>
      </p>
      <p>
        <Link to="/series">SERIES</Link>
      </p>
    </div>
  );
};

export default Home;
