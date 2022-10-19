import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { setContinent } from '../redux/actions';

const ContinentMatrixCard = ({
  name, totalConfirmed, totalDeaths,
}) => {
  const dispatch = useDispatch();

  const continentMatrixClickHandler = () => {
    dispatch(setContinent(name));
  };

  return (
    <>
      <NavLink
        to={`continent/${name}`}
        className="rounded-lg opacity-70 relative shadow-xl bg-pink-800  hover:border-0 hover:bg-pink-700 hover:w-[99%] p-8 cursor-pointer flex flex-col justify-end items-end gap-1"
        onClick={continentMatrixClickHandler}
      >
        <div
          className="absolute inset-3 bottom-8  z-0 opacity-20"
          role="presentation"
          onClick={continentMatrixClickHandler}
          style={{
            backgroundImage: `url(https://mapsvg.com/static/maps/geo-calibrated/${
              name === 'Oceania'
                ? 'australia'
                : name.split('_').join('-').toLowerCase()
            }.svg)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <h1 className="text-3xl z-10 ">
          {name.split('_').join(' ').toUpperCase()}
        </h1>
        <h3 className="text-lg z-10">
          <span className="text-lg sm:text-xl">Total Cases : </span>
          <span className="text-2xl">{totalConfirmed}</span>
        </h3>
        <h3 className="text-lg z-10">
          <span className="text-lg sm:text-xl">Total Deaths : </span>
          <span className="text-2xl">{totalDeaths}</span>
        </h3>
        <div className="absolute bottom-1 right-1 flex justify-end z-10">
          <BsFillArrowDownRightSquareFill />
        </div>
      </NavLink>
    </>
  );
};

ContinentMatrixCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeaths: PropTypes.number.isRequired,
};

export default ContinentMatrixCard;
