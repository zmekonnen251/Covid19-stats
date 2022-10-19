import { LOAD_DATA, SET_CONTINENT, SET_COUNTRY } from '../actionTypes';

import fetchAllApi from '../../api';
import loadDataByContinent from '../../modules/continent';

export const loadData = () => async (dispatch) => {
  const response = await fetchAllApi();
  const { Global: globalData, Countries: countries } = response.data;
  const date = response.data.Date.split('T')[0];

  const continentsData = loadDataByContinent(countries);
  dispatch({ type: LOAD_DATA, payload: { globalData, continentsData, date } });
};

export const setContinent = (continent = '') => ({
  type: SET_CONTINENT,
  payload: { continent },
});

export const setCountry = (country = '') => ({
  type: SET_COUNTRY,
  payload: { country },
});
