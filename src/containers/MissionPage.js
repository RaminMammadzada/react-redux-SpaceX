import React from 'react';
import { useParams } from 'react-router-dom';

const MissionPage = () => {
  const { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default MissionPage;
