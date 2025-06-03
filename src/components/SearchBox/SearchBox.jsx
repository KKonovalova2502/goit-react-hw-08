import { useSelector, useDispatch } from 'react-redux';
import style from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.container}>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};

export default SearchBox;
