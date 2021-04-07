import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { fetchCurrentMission } from '../actions';
import './MissionPage.css';

const MissionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentMission } = useSelector((state) => state);

  useLayoutEffect(() => {
    const url = `https://api.spacexdata.com/v3/launches?flight_number=${id}`;
    dispatch(fetchCurrentMission(url));
  }, []);

  if (currentMission.links !== undefined) {
    return (
      <div className="single-mission-page">
        <div className="mission-details">
          <ul>
            <li>{`Flight no: ${id}`}</li>
            <li>{`Mission name: ${currentMission.mission_name}`}</li>
            <li>{`About launch: ${currentMission.details}`}</li>
            <li>{`Launch year no: ${currentMission.launch_year}`}</li>
            <li>{`Launch site: ${currentMission.launch_site.site_name}`}</li>
          </ul>
        </div>
        <div className="mission-video">
          <ReactPlayer
            width="420px"
            height="250px"
            url={currentMission.links.video_link}
          />
        </div>
      </div>
    );
  }
  return (<div>Loading</div>);
};

export default MissionPage;
