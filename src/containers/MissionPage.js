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
      <div className="d-flex flex-column flex-wrap align-items-center justify-content-center mx-5 mt-5">
        <h1>{`Mission ${currentMission.mission_name}`}</h1>
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center mx-5 mt-5">
          <div className="mission-details mr-5 w-50">
            <ul>
              <li>
                Flight no:
                {' '}
                <span className="font-italic">{id}</span>
                {' '}
              </li>
              <li>
                About launch:
                {' '}
                <span className="font-italic">{currentMission.details}</span>
                {' '}
              </li>
              <li>
                Launch year no:
                {' '}
                <span className="font-italic">{currentMission.launch_year}</span>
                {' '}
              </li>
              <li>
                Launch site:
                {' '}
                <span className="font-italic">{currentMission.launch_site.site_name}</span>
                {' '}
              </li>
              <li>
                Rocket name:
                {' '}
                <span className="font-italic">{currentMission.rocket.rocket_name}</span>
                {' '}
              </li>
              <li>
                {' '}
                <a target="_blank" rel="noreferrer" href={currentMission.links.article_link}>Article about the mission</a>
                {' '}
              </li>
              <li>
                {' '}
                <a target="_blank" rel="noreferrer" href={currentMission.links.wikipedia}>More detail</a>
                {' '}
              </li>
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
      </div>

    );
  }
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center mt-5">
      <h1>Loading...</h1>
    </div>
  );
};

export default MissionPage;
