import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import Mission from './Mission';
import { yearChanged, successChanged } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const MissionList = () => {
  const { missions, yearFilter, successFilter } = useSelector((state) => state);
  const dispatch = useDispatch();

  // successFilter(true);

  let currentMissionList;

  const updateCurrentMissionList = (yearFilter, successCaseFilter) => {
    if (yearFilter === 'All' && successCaseFilter === 'All') {
      currentMissionList = missions.concat();
    } else if (yearFilter !== 'All' && successCaseFilter !== 'All') {
      if (successCaseFilter === 'Yes') {
        currentMissionList = missions.filter(
          (mission) => (mission.launch_year.toString() === yearFilter.toString()
            && mission.launch_success === true),
        );
      }

      if (successCaseFilter === 'No') {
        currentMissionList = missions.filter(
          (mission) => (mission.launch_year.toString() === yearFilter.toString()
            && mission.launch_success === false),
        );
      }
    } else if (yearFilter === 'All' && successCaseFilter !== 'All') {
      if (successCaseFilter === 'Yes') {
        currentMissionList = missions.filter(
          (mission) => mission.launch_success === true,
        );
      }

      if (successCaseFilter === 'No') {
        currentMissionList = missions.filter(
          (mission) => mission.launch_success === false,
        );
      }
    } else if (yearFilter !== 'All' && successCaseFilter === 'All') {
      currentMissionList = missions.filter(
        (mission) => mission.launch_year.toString() === yearFilter.toString(),
      );
    }

    // if (yearFilter === 'All') {
    //   currentMissionList = missions.concat();
    // } else {
    //   currentMissionList = missions.filter(
    //     (mission) => mission.launch_year.toString() === yearFilter.toString(),
    //   );
    //   console.log('currentMissionList: ', currentMissionList);
    // }
  };

  updateCurrentMissionList(yearFilter, successFilter);

  const handleFilterChange = (event) => {
    event.preventDefault();

    if (event.target.name === 'year') {
      const year = event.target.value;
      dispatch(yearChanged(year));
    }

    if (event.target.name === 'successCase') {
      const successCase = event.target.value;
      dispatch(successChanged(successCase));
    }
  };

  return (
    <div>
      <div className="header">
        <div className="d-flex flex-column align-items-center">
          <h1>Launch Missions</h1>
          <Filter handleChange={handleFilterChange} />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {currentMissionList.map((mission) => (
          <Mission
            key={`${mission.launch_date_unix}-${mission.static_fire_date_utc}`}
            missionImage={mission.links.mission_patch_small}
            missionName={mission.mission_name}
            launchYear={mission.launch_year}
            launchSuccess={mission.launch_success}
            missionId={mission.flight_number}
          />
        ))}
      </div>
    </div>
  );
};

MissionList.propTypes = {
  // successFilter: PropTypes.func.isRequired,
};

MissionList.defaultProps = {
  missions: [{}, {}],
};

export default MissionList;
