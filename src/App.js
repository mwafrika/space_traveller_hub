/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound';
import Dragon from './components/Dragon';
import RocketList from './components/RocketList';
// import NavBar from './components/NavBar';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' index element={<RocketList />} />
        <Route path='dragons' element={<Dragon />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
