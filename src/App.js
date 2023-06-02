import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/home';
import Movies from 'pages/movies';
import Series from 'pages/series';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="*" element={<div>404, Not Found!</div>} />
          </Route>
        </Routes>
        <Footer />
      </header>
    </div>
  );
};

export default App;
