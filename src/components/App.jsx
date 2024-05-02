import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  MainContainer } from "./App.styled";
import { fetchContacts } from 'redux/contactsOperations';

export const App = () => {

  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  console.log(contacts);

    return (
    <div>
        <MainContainer>
          <h1>Phonebook</h1>
          <ContactForm />
          
          <h2>Contacts</h2>
          <Filter /> 
          {contacts.length === 0
            ? <p>empty</p>
            : <ContactList />}
          
        </MainContainer>

        {/* Settings tostify  */}
   <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
    </div>
  );
  
};