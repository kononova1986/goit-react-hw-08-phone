import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameInput = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={nameInput}
        onChange={handleChange}
        className={css.inputSearch}
      />
    </div>
  );
}
