import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>
          We are not affiliated, associated, authorized, endorsed by,
          or in any way officially connected with Space Exploration
          Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates.
          The names SpaceX as well as related names, marks, emblems and images are
          registered trademarks of their respective owners.
        </p>
      </div>
    );
  }
}

export default About;
