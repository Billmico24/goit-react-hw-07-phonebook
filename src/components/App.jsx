import React from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import {  MainContainer } from "./App.styled";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class App extends React.Component {

state = {
  contacts: [ {id: nanoid(5), name: 'Лунная Роза', number: '071-0-232'},
              {id: nanoid(5), name: 'Hermione Kline', number: '645-17-19'},
              {id: nanoid(5), name: 'Eden Clements', number: '443-89-12'},
              { id: nanoid(5), name: 'Annie Copeland', number: '459-12-56' },
  ],
  filter: '',

}
  

  onSubmitHandler = ({ name, number }) => {
    
    const newContact = {
      id: nanoid(5), name, number
    }

    const oldContacts = this.state.contacts;
   
    const sameName = oldContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
   
    if (sameName) {
      return toast.error(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...oldContacts],
    }));
  };




  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }


  findContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;


    return (
    <div>
        <MainContainer>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.onSubmitHandler  } />
          
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} /> 
          {contacts.length === 0
            ? <p>empty</p>
            : <ContactList contacts={this.findContacts()} onDeleteContact={this.deleteContact} />}
          
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
  }
};