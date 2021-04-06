import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Routes from './Routes';
import { fetchData } from './actions';

const App = () => {
  const dispatch = useDispatch();

  const url = 'https://api.spacexdata.com/v3/launches?limit=5&offset=5';
  dispatch(fetchData(url));

  return (
    <Routes />
  );
};

export default App;
