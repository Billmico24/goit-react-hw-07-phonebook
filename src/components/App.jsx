import React from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import {  MainContainer } from "./App.styled";

export class App extends React.Component {

state = {
  contacts: [ {id: nanoid(5), name: 'Лунная Роза', number: '071-0-232'},
              {id: nanoid(5), name: 'Hermione Kline', number: '645-17-19'},
              {id: nanoid(5), name: 'Eden Clements', number: '443-89-12'},
              {id: nanoid(5), name: 'Annie Copeland', number: '459-12-56'},],

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

  render() {
    const { contacts } = this.state;

    return (
    <div>
        <MainContainer>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.onSubmitHandler  } />

          <h1>Contacts</h1>
          <ul>
          {contacts.map(el => (
            <li key={el.id}>{el.name}:  {el.number}</li>
          ))}
            </ul>
       </MainContainer>
    </div>
  );
  }
  
};