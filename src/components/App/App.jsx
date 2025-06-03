import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import Loader from '../Loader/Loader';
import { selectError, selectLoading } from '../../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && (
        <p style={{ color: '#ffeba7', fontSize: '20px' }}>
          Oops!.. Something went wrong... <br />
          Wait, everything will be fine now!
        </p>
      )}
      <ContactList />
    </div>
  );
}
