import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { setCountry } from '../redux/actions';

const CountryMatrixCard = ({ country }) => {
  const {
    name, slug, totalConfirmed, totalDeaths,
  } = country;
  const dispatch = useDispatch();

  const countryMatrixClickHandler = () => {
    dispatch(setCountry(slug));
  };

  return (
    <>
      <NavLink
        to={`${slug}`}
        onClick={countryMatrixClickHandler}
        className="relative flex flex-col justify-end items-end pb-8 pr-8 opacity-70 rounded-lg hover:border bg-pink-800 hover:bg-pink-700 hover:w-[99%] h-[200px] w-full  cursor-pointer"
        role="presentation"
      >
        <div
          className="absolute box-border left-[-170px] inset-1 bottom-8  z-0 opacity-20"
          style={{
            backgroundImage: `url(https://mapsvg.com/static/maps/geo-calibrated/${slug}.svg)`,
            backgroundSize: '15%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative flex flex-col justify-end items-start">
          <h1 className="text-3xl">{name}</h1>
          <h3 className="text-lg">
            <span className="text-lg sm:text-xl">Total Cases :</span>
            <span className="text-2xl">{totalConfirmed}</span>
          </h3>
          <h3 className="text-base">
            <span className="text-lg sm:text-xl">Total Deaths : </span>
            <span className="text-2xl">{totalDeaths}</span>
          </h3>
        </div>
        <div className="absolute bottom-2 right-1 flex justify-end">
          <BsFillArrowDownRightSquareFill />
        </div>
      </NavLink>
    </>
  );
};

CountryMatrixCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    totalConfirmed: PropTypes.number.isRequired,
    totalDeaths: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryMatrixCard;
