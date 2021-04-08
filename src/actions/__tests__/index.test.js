import {
  successChanged,
  yearChanged,
  setAllMissions,
  setCurrentMission,
} from '../index';

import {
  SUCCESS_FILTER,
  YEAR_FILTER,
  ALL_MISSIONS,
  CURRENT_MISSION,
} from '../../constants/action-types';

describe('actions - ', () => {
  it('should create an action to filter missions based on success case selected', () => {
    expect(successChanged(true).type).toEqual(SUCCESS_FILTER);
    expect(successChanged(true).payload).toEqual(true);
  });

  it('should create an action to filter missions based on the year selected', () => {
    expect(yearChanged(2019).type).toEqual(YEAR_FILTER);
    expect(yearChanged(2021).payload).toEqual(2021);
  });

  it('should create an action to set all missions', () => {
    const allMissions = [
      { mission_name: 'mission1', mission_image_link: 'sample_image_link_1' },
      { mission_name: 'mission2', mission_image_link: 'sample_image_link_2' },
      { mission_name: 'mission3', mission_image_link: 'sample_image_link_3' }];
    expect(setAllMissions(allMissions).type).toEqual(ALL_MISSIONS);
    expect(setAllMissions(allMissions).payload).toEqual(allMissions);
  });

  it('should create an action to set current mission', () => {
    const currentMission = {
      mission_name: 'mission1',
      mission_image_link: 'sample_image_link_1',
    };
    expect(setCurrentMission(currentMission).type).toEqual(CURRENT_MISSION);
    expect(setCurrentMission(currentMission).payload).toEqual(currentMission);
  });
});
