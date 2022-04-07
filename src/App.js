/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NotFound from './components/notFound';
import Dragon from './components/Dragon';
import RocketList from './components/RocketList';
import MyProfile from './components/MyProfile';
import { retrieveAPIRockets } from './redux/actions/rocket';
import NavBar from './components/NavBar';
import classes from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAPIRockets());
  }, []);

  return (
    <>
      <div className={classes.App}>
        <Router>
          <NavBar />
          <div className={classes.mainComponents}>
            <Routes>
              <Route path="/" index element={<RocketList />} />
              <Route path="/dragons" element={<Dragon />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
