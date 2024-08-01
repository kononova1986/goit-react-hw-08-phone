import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContact } from '../../redux/contacts/selectors';

export default function ContactList() {
  const visibleInfo = useSelector(selectVisibleContact);

  return (
    <ul
      className={css.list}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {visibleInfo.map(info => (
        <li key={info.id}>
          <Contact info={info} />
        </li>
      ))}
    </ul>
  );
}
