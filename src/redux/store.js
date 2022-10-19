import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from './reducers';

const rootReducer = combineReducers({
  covidData: covidReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
