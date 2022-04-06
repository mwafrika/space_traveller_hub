/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NotFound from './components/notFound';
import Dragon from './components/Dragon';
import RocketList from './components/RocketList';
import MyProfile from './components/MyProfile';
import { retrieveAPIRockets } from './redux/actions/rocket';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAPIRockets());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<RocketList />} />
          <Route path="/dragons" element={<Dragon />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
