import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covid19Reducer from './redux/reducers';
import { setCountry, setContinent } from './redux/actions';

import CountryMatrixCard from './components/CountryMatrixCard';
import ContinentMatrixCard from './components/ContinentMatrixCard';
import { SET_COUNTRY, SET_CONTINENT } from './redux/actionTypes';
import ContinentSelector from './components/ContinentSelector';

const rootReducer = combineReducers({
  covidData: covid19Reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(cleanup);

describe('Home Page', () => {
  test('Home page renders correctly', () => {
    const homePage = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ContinentSelector />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(homePage).toMatchSnapshot();
  });
});

describe('Countries List ', () => {
  test('Countries Card renders correctly', () => {
    const countryCard = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CountryMatrixCard
              name="Ethiopia"
              totalConfirmed={20000}
              totalDeath={1000}
              onClickSetCountry="Ethiopia"
            />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(countryCard).toMatchSnapshot();
  });
});

describe('Countries List ', () => {
  test('Continent Card renders correctly', () => {
    const continentCard = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ContinentMatrixCard
              key={uuidv4()}
              name="Europe"
              totalConfirmed={500000}
              totalDeath={50000}
              onClickSetContinent="Europe"
            />
            ;
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(continentCard).toMatchSnapshot();
  });
});

describe('Pure Action Creators Test', () => {
  test('SetCountry action creator test', () => {
    const data = setCountry('Ghana');
    expect(data.type).toEqual(SET_COUNTRY);
    expect(data.payload.country).toEqual('Ghana');
  });

  test('SetContinent action creator test', () => {
    const data = setContinent('Europe');
    expect(data.type).toEqual(SET_CONTINENT);
    expect(data.payload.continent).toEqual('Europe');
  });
});
