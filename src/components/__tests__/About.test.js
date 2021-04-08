import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import About from '../About';

describe('About component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <About />
        </Provider>
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
