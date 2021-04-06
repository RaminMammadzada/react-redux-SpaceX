import React, { Component } from 'react';
import MissionList from '../containers/MissionList';

class Missions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MissionList />
      </div>
    );
  }
}

export default Missions;
