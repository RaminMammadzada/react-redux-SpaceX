import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Mission.css';

const Mission = (props) => {
  const {
    missionImage,
    missionName,
    missionId,
  } = props;

  return (
    <div className="mission-link">
      <Link className="d-flex flex-column align-items-center m-4" to={`/mission/${missionId}`}>
        <img className="mission-logo-width" src={missionImage} alt={missionName} />
        {' '}
        <h4>{missionName}</h4>
      </Link>
    </div>
  );
};

Mission.propTypes = {
  missionImage: PropTypes.string,
  missionName: PropTypes.string,
  missionId: PropTypes.number,
};

Mission.defaultProps = {
  missionImage: 'https:',
  missionName: 'name',
  missionId: 111,
};

export default Mission;
