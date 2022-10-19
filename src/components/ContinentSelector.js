import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ContinentMatrixCard from './ContinentMatrixCard';
import WorldTotal from './WorldTotal';

const ContinentSelector = () => {
  const data = useSelector((state) => state.covidData.continentsData);

  return (
    <div className="mt-[100px] pb-12">
      <h1 className="text-5xl font-bold pb-2 text-center">Covid Stats</h1>
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-3 m-7 border-box">
        <WorldTotal />
        {Object.keys(data).map((continent) => {
          const continentName = continent;
          const countriesData = data[continentName].countries;
          let totalConfirmed = 0;
          let totalDeaths = 0;
          countriesData.forEach((country) => {
            totalConfirmed += country.totalConfirmed;
            totalDeaths += country.totalDeaths;
          });

          return (
            <Link to={`/continent/${continentName}`} key={uuidv4()}>
              <ContinentMatrixCard
                key={uuidv4()}
                name={continentName}
                totalConfirmed={totalConfirmed}
                totalDeaths={totalDeaths}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContinentSelector;
