import React from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { FormContainer, MainContainer } from "./App.styled";

export class App extends React.Component {

state = {
  contacts: [ {id: nanoid(5), name: 'Лунная Роза'},
              {id: nanoid(5), name: 'Hermione Kline'},
              {id: nanoid(5), name: 'Eden Clements'},
              {id: nanoid(5), name: 'Annie Copeland'},],

}

  onSubmitHandler = ({ name }) => {
    
    const newContact = {
      id: nanoid(5), name
    }


    const oldContacts = this.state.contacts;
    console.log(oldContacts);
    console.log(newContact);
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
          <FormContainer>
            <Form onFormSubmit={this.onSubmitHandler  } />
          </FormContainer>
          <h1>Contacts</h1>
          <ul>
          {contacts.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
            </ul>
       </MainContainer>
    </div>
  );
  }
  
};