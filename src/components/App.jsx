import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  MainContainer } from "./App.styled";



export const App = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);



  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

    return (
    <div>
        <MainContainer>
          <h1>Phonebook</h1>
          <ContactForm />
          
          <h2>Contacts</h2>
          <Filter /> 
          {contacts.length === 0
            ? <p>empty</p>
            : <ContactList contacts={findContacts()} />}
          
        </MainContainer>

        {/* налаштування tostify  */}
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