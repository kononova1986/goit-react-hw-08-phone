import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import ContactForm from '../../components/ContactForm/ContactForm';
import { selectUser } from '../../redux/auth/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flex: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ padding: '0', margin: '0' }}>Welcome, {user.name}</p>
      <h1>Your contacts</h1>
      <SearchBox />
      <div>{isLoading && <Loader />}</div>
      <ContactForm />
      <ContactList />
    </div>
  );
}
