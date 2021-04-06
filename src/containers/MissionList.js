import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const MissionList = () => {
  const { missions } = useSelector((state) => state);

  console.log('Missions: ', missions);

  // successFilter(true);

  return (
    <div>
      {missions.map((mission) => (
        <Mission
          key={mission.launch_date_unix}
          missionImage={mission.links.mission_patch_small}
          missionName={mission.mission_name}
          launchYear={mission.launch_year}
        />
      ))}
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
