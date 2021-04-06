import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    missionImage,
    missionName,
    launchYear,
    launchSuccess,
  } = props;

  return (
    <div>
      <img src={missionImage} alt={missionName} />
      <h5>{missionName}</h5>
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
};

Mission.defaultProps = {
  missionImage: 'https:',
  missionName: 'name',
  launchSuccess: true,
};

export default Mission;
