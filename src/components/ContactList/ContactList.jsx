import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.items);

  const nameInput = useSelector(state => state.filters.name);
  const visibleInfo = contact.filter(i =>
    i.name.toLowerCase().includes(nameInput.toLowerCase())
  );
  console.log('🚀 ~ SearchBox ~ visibleInfo :', visibleInfo);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.list}>
      {visibleInfo.map(info => (
        <li key={info.id}>
          <Contact info={info} deleteNumber={() => handleDelete(info.id)} />
        </li>
      ))}
    </ul>
  );
}
