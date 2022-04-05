/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound';
import Dragon from './components/dragon/dragonContainer';
import Rocket from './components/rocket';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' index element={<Rocket />} />
        <Route path='/dragons' element={<Dragon />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
