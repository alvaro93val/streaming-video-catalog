import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/home';
import Videos from 'pages/videos';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Videos />} />
            <Route path="/series" element={<Videos />} />
            <Route path="*" element={<div>404, Not Found!</div>} />
          </Route>
        </Routes>
        <Footer />
      </header>
    </div>
  );
};

export default App;
