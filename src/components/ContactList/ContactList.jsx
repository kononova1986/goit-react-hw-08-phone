import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContact } from '../../redux/contactsSlice';

export default function ContactList() {
  const visibleInfo = useSelector(selectVisibleContact);

  return (
    <ul className={css.list}>
      {visibleInfo.map(info => (
        <li key={info.id}>
          <Contact info={info} />
        </li>
      ))}
    </ul>
  );
}
