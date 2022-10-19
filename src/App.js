import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadData } from './redux/actions';
import CountryDetails from './components/CountryDetails';
import ContinentSelector from './components/ContinentSelector';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <Router>
      <div className="box-border text-white pb-3 m-0 h-full">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ContinentSelector />} />
          <Route
            exact
            path="/continent/:continentName"
            element={<CountriesList />}
          />
          <Route
            exact
            path="continent/:continentName/:countrySlug"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
