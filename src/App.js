/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NotFound from './components/notFound';
import MyProfile from './components/MyProfile';
import { retrieveAPIRockets } from './redux/actions/rocket';
import NavBar from './components/header/NavBar';
import classes from './App.module.css';
import { displayDragons } from './redux/actions/dragon';
import Dragon from './components/dragon/dragonContainer';
import Missions from './components/missions/missions';
import RocketList from './components/rockets/RocketList';
import { missionsRetrieved } from './redux/actions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAPIRockets());
    dispatch(displayDragons());
    dispatch(missionsRetrieved());
  }, []);

  return (
    <>
      <div className={classes.App}>
        <Router>
          <NavBar />
          <div className={classes.mainComponents}>
            <Routes>
              <Route path='/' index element={<RocketList />} />
              <Route path='/dragons' element={<Dragon />} />
              <Route path='/missions' element={<Missions />} />
              <Route path='/myprofile' element={<MyProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
