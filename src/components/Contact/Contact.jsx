import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ info, deleteNumber }) {
  return (
    <div className={css.wrap}>
      <ul>
        <li className={css.item}>
          <FaUser className={css.icon} />
          {info.name}
        </li>
        <li className={css.item}>
          <FaPhone className={css.icon} />
          {info.number}
        </li>
      </ul>
      <button type="button" onClick={deleteNumber}>
        Delete
      </button>
    </div>
  );
}
