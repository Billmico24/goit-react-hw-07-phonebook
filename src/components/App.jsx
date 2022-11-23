// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addContact } from "redux/contactsSlice";
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  MainContainer } from "./App.styled";



export const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // console.log(contacts);

  const onSubmitHandler = ({name, number}) => {
   
    const sameName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
   
    if (sameName) {
      return toast.error(`${name} is already in contacts`);
    } 
    dispatch(addContact({
      id: nanoid(5),
      name: name,
      number: number
    }));
  };

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

    return (
    <div>
        <MainContainer>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={onSubmitHandler  } />
          
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