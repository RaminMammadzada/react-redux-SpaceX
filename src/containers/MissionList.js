import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { successFilter } from '../actions';

const MissionList = (props) => {
  const {
    missions,
    successFilter,
  } = props;

  console.log('Missions: ', missions);

  successFilter(true);

  return (
    <div>
      {missions.map((mission) => (
        <p
          key={Math.floor(Math.random() * 100)}
        >
          {mission.name}
        </p>
      ))}
    </div>
  );
};

MissionList.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object),
  successFilter: PropTypes.func.isRequired,
};

MissionList.defaultProps = {
  missions: [{}, {}],
};

const mapStateToProps = (state) => ({
  missions: state.missions,
});

const mapDispatchToProps = (dispatch) => ({
  successFilter: (successCase) => dispatch(successFilter(successCase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionList);
