import { FaAngleLeft } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setContinent, setCountry } from '../redux/actions';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { continent } = useSelector((state) => state.covidData);
  const { country } = useSelector((state) => state.covidData);
  const selectedDate = useSelector((state) => state.covidData.date);

  return (
    <>
      <nav className="fixed top-0 w-full opacity-70 z-20 opacity-1 flex justify-between items-center h-10 p-5 pb-8 bg-pink-700 ">

        <button
          type="button"
          onClick={() => {
            if (country) {
              navigate(`/continent/${continent}`);
              // setLocalCountry(null);
              dispatch(setCountry(null));
            } else {
              navigate('/');
              dispatch(setContinent(null));
            }
          }}
          className="m-3 font-bold flex text-lg mt-5"
        >
          <div>
            <FaAngleLeft className="inline" />
            {selectedDate}
          </div>
        </button>

        <BsFillGearFill width="10px" />
      </nav>
    </>
  );
};

export default NavBar;
