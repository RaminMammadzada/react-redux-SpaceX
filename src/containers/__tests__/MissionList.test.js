import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MissionList from '../MissionList';

describe('Mission List - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <MissionList />
        </Provider>
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
