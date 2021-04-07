import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentMission } from '../actions';

const MissionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentMission } = useSelector((state) => state);

  useLayoutEffect(() => {
    const url = `https://api.spacexdata.com/v3/launches?flight_number=${id}`;
    dispatch(fetchCurrentMission(url));
  }, []);

  return (
    <div>
      <p>{id}</p>
      <h1>{currentMission.mission_name}</h1>
      <h1>{currentMission.details}</h1>
      <h1>{currentMission.launch_year}</h1>
    </div>
  );
};

export default MissionPage;
