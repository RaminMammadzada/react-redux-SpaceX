import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YearFilter from '../components/YearFilter';
import Mission from './Mission';
import { yearChanged } from '../actions';

const MissionList = () => {
  const { missions, yearFilter } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log('Missions: ', missions);

  // successFilter(true);

  const handleYearFilterChange = (event) => {
    event.preventDefault();
    const year = event.target.value;
    dispatch(yearChanged(year));
  };

  let currentMissionList;
  if (yearFilter === 'All') {
    currentMissionList = missions.concat();
  } else {
    currentMissionList = missions.filter(
      (mission) => mission.launch_year.toString() === yearFilter.toString(),
    );
    console.log('currentMissionList: ', currentMissionList);
  }

  return (
    <div>
      <div className="header">
        <div className="header-navbar">
          <h1 className="bookstote-cms">Bookstrote CMS</h1>
          <h2 className="books-text-in-header">Books</h2>
          <YearFilter handleChange={handleYearFilterChange} />
        </div>
      </div>
      <div>
        {currentMissionList.map((mission) => (
          <Mission
            key={`${mission.launch_date_unix}-${mission.static_fire_date_utc}`}
            missionImage={mission.links.mission_patch_small}
            missionName={mission.mission_name}
            launchYear={mission.launch_year}
            launchSuccess={mission.launch_success}
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
