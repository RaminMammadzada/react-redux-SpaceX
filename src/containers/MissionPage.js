import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { fetchCurrentMission } from '../actions';
import './MissionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <li>{`Flight no: ${id}`}</li>
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
