import { LOAD_DATA, SET_CONTINENT, SET_COUNTRY } from '../actionTypes';

const covidInitial = {
  date: '', continentsData: {}, globalData: {}, selectedContinent: null, selectedCountry: null,
};

export default (state = covidInitial, action = {}) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case SET_CONTINENT:
      return { ...state, selectedContinent: action.payload };
    case SET_COUNTRY:
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
};
