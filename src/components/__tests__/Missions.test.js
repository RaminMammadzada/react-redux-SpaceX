import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Missions from '../Missions';

describe('Missions component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Missions />
        </Provider>
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
