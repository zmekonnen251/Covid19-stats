import React from 'react';
import { useSelector } from 'react-redux';

const WorldTotal = () => {
  const covidData = useSelector((state) => state.covidData);
  const { globalData, date } = covidData;
  const {
    TotalConfirmed: totalConfirmed,
    TotalDeaths: totalDeaths,
    TotalRecovered: totalRecovered,
    NewConfirmed: newConfirmed,
  } = globalData;

  return (
    <div
      role="presentation"
      className="rounded-lg opacity-70 p-10 bg-pink-800 hover:bg-pink-700 sm:col-span-2 mt-4"
    >
      <h1 className="text-4xl mb-3 text-center">World Total</h1>
      <h1 className="text-2xl mb-3 text-center">{date}</h1>
      <div className="relative hover:backdrop-brightness-20 p-2 sm:p-16 cursor-pointer flex flex-col items-end gap-1">
        <div
          className="absolute inset-2 sm:left-[-35rem] z-0 opacity-20"
          style={{
            backgroundImage:
              'url( https://mapsvg.com/static/maps/geo-calibrated/world.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <h3 className="text-xl">
          <span className="text-lg sm:text-xl">Total Confirmed Cases : </span>
          <span className="text-2xl">{totalConfirmed}</span>
        </h3>

        <h3 className="text-lg">
          <span className="text-lg sm:text-xl">Total Deaths : </span>
          <span className="text-2xl">{totalDeaths}</span>
        </h3>
        <h3 className="text-xl hidden sm:block">
          <span className="text-xl">Total Recovered : </span>
          <span className="text-2xl">{totalRecovered}</span>
        </h3>
        <h3 className="text-xl hidden sm:block">
          <span className="text-xl">New Confirmed Cases : </span>
          <span className="text-2xl">{newConfirmed}</span>
        </h3>
      </div>
    </div>
  );
};

export default WorldTotal;
