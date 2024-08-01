import { useSelector, useDispatch } from 'react-redux';
import { selectValueInput } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameInput = useSelector(selectValueInput);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        value={nameInput}
        onChange={handleChange}
        className={css.inputSearch}
      />
      <p style={{ fontSize: '12px', marginTop: '5px' }}>
        Find contacts by name
      </p>
    </div>
  );
}
