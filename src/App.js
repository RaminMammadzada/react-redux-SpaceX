import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Routes from './Routes';
import { fetchAllMissions } from './actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v3/launches';
    dispatch(fetchAllMissions(url));
  });

  return (
    <Routes />
  );
};

export default App;
