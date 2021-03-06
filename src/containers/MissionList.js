import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import Mission from './Mission';
import { yearChanged, successChanged } from '../actions';

const MissionList = () => {
  const { missions, yearFilter, successFilter } = useSelector((state) => state);
  const dispatch = useDispatch();
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
        {currentMissionList.map((mission) => {
          let missionImageLink = 'https://via.placeholder.com/250x250/555555/FFFFFF?text=Image+Not+Found';
          if (mission.links.mission_patch_small !== null) {
            missionImageLink = mission.links.mission_patch_small;
          }

          return (
            <Mission
              key={`${mission.launch_date_unix}-${mission.static_fire_date_utc}`}
              missionImage={missionImageLink}
              missionName={mission.mission_name}
              launchYear={mission.launch_year}
              launchSuccess={mission.launch_success}
              missionId={mission.flight_number}
            />
          );
        })}
      </div>
    </div>
  );
};

MissionList.defaultProps = {
  missions: [{}, {}],
  yearFilter: 2020,
  successFilter: true,
};

export default MissionList;
