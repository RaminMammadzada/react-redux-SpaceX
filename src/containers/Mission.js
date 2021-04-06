import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Mission = (props) => {
  const {
    missionImage,
    missionName,
    launchYear,
    launchSuccess,
    missionId,
  } = props;

  return (
    <div>
      <img src={missionImage} alt={missionName} />
      <Link to={`/users/${missionId}`}>
        {' '}
        {missionName}
      </Link>
      <h5>{launchYear}</h5>
      <h5>{launchSuccess ? 'YES' : 'NO'}</h5>
    </div>
  );
};

Mission.propTypes = {
  missionImage: PropTypes.string,
  missionName: PropTypes.string,
  launchYear: PropTypes.string.isRequired,
  launchSuccess: PropTypes.bool,
  missionId: PropTypes.number,
};

Mission.defaultProps = {
  missionImage: 'https:',
  missionName: 'name',
  launchSuccess: true,
  missionId: 111,
};

export default Mission;
