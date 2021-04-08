import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Filter from '../Filter';

describe('Filter component - ', () => {
  it('matches the snapshot', () => {
    let sampleValue = 0;
    const handleFilterChange = () => {
      sampleValue += 1;
      return sampleValue;
    };

    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Filter
            handleChange={handleFilterChange}
          />
        </Provider>
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
