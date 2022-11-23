import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contactsSlice';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  MainContainer } from "./App.styled";



export const App = () => {

  const contacts = useSelector(getContacts);

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