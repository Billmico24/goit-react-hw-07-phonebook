import React from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import {  MainContainer } from "./App.styled";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

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


  render() {
    const { contacts, filter } = this.state;


    return (
    <div>
        <MainContainer>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.onSubmitHandler  } />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter } /> 
          <ContactList contacts={ this.findContacts()} />
       </MainContainer>
    </div>
  );
  }
  
};