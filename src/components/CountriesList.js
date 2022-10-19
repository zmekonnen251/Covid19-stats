import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import CountryMatrixCard from './CountryMatrixCard';

const CountriesList = () => {
  const { continentName } = useParams();

  const continentData = useSelector(
    (state) => state.covidData.continentsData[continentName].countries,
  );

  return (
    <div className="mt-[100px] pb-12">
      <h1 className="text-5xl font-bold  text-center">{continentName}</h1>
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-3 m-7 mt-10 p-2">
        {continentData.map((country) => (
          <Link to={`/country/${country.slug}`} key={country.id}>
            <CountryMatrixCard
              country={country}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
