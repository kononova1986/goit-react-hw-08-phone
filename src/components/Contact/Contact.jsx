import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Contact({ info }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContacts(info.id));
  };

  return (
    <div className={css.wrap}>
      <ul>
        <li className={css.item}>
          <Avatar
            src="/broken-image.jpg"
            style={{
              marginRight: '5px',
              marginBottom: '5px',
              width: '20px',
              height: '20px',
              color: 'white',
              backgroundColor: '#007cc4',
            }}
          />
          {info.name}
        </li>
        <li className={css.item}>
          <PhoneAndroidIcon
            style={{
              marginRight: '5px',
              width: '20px',
              height: '20px',
              color: '#007cc4',
            }}
          />
          {info.number}
        </li>
      </ul>
      <Button variant="contained" type="button" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}
