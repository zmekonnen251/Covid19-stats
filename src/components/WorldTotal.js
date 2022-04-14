import React from 'react';
import { useSelector } from 'react-redux';

const WorldTotal = () => {
  let totalConfirmed = 0;
  let totalDeaths = 0;
  let totalRecovered = 0;
  let totalOpenCases = 0;

  const covidData = useSelector((state) => state.covidData.continents);
  const selectedDate = useSelector((state) => state.covidData.date);

  Object.keys(covidData).forEach((continent) => {
    Object.keys(covidData[continent].countries).forEach((country) => {
      totalConfirmed
        += +covidData[continent].countries[country].today_confirmed;
      totalDeaths += +covidData[continent].countries[country].today_deaths;
      totalOpenCases
        += +covidData[continent].countries[country].today_open_cases;
      totalRecovered
        += +covidData[continent].countries[country].today_recovered;
    });
  });
  return (
    <div role="presentation" className="sm:col-span-2">
      <h1 className="text-4xl mb-3 text-center">World Total</h1>
      <h1 className="text-2xl mb-3 text-center">{selectedDate}</h1>
      <div className="border p-8 cursor-pointer flex flex-col items-center gap-1">
        <h3 className="text-lg">
          Total Confirmed Cases :
          {totalConfirmed}
        </h3>
        <h3 className="text-lg">
          Total Deaths :
          {totalDeaths}
        </h3>
        <h3 className="text-lg">
          Total Recovered :
          {totalRecovered}
        </h3>
        <h3 className="text-lg">
          Total Open Cases :
          {totalOpenCases}
        </h3>
      </div>
    </div>
  );
};

export default WorldTotal;
