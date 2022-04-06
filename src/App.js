/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound';
import Dragon from './components/dragon/dragonContainer';
import Missions from './components/missions/missions';
import RocketList from './components/rockets/RocketList';
import Profile from './components/dragon/profileContainer';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' index element={<RocketList />} />
        <Route path='/dragons' element={<Dragon />} />
        <Route path='/missions' element={<Missions />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
