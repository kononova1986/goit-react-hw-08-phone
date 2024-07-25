import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps.js';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader.jsx';
import Error from './components/Error/Error.jsx';
import { selectLoading, selectError } from './redux/contactsSlice.js';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader />}
        <ContactList />
        {isError && <Error />}
      </div>
    </>
  );
}

export default App;
