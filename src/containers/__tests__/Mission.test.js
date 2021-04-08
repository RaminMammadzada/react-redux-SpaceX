import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Mission from '../MissionList';

describe('Mission container - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Mission
            key="sample_key_a"
            missionImage="sample_mission_image_a"
            missionName="sample_mission_name_a"
            launchYear="sample_mission_launch_year_a"
            launchSuccess="sample_mission_launch_success_a"
            missionId="sample_mission_id_a"
          />
        </Provider>
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
