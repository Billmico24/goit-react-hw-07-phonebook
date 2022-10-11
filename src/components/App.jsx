import React from "react";
import { nanoid } from 'nanoid'

export class App extends React.Component {

state = {
  contacts: [ {id: nanoid(5), name: 'Rosie Simpson', number: '459-12-56'},
              {id: nanoid(5), name: 'Hermione Kline', number: '443-89-12'},
              {id: nanoid(5), name: 'Eden Clements', number: '645-17-79'},
              {id: nanoid(5), name: 'Annie Copeland', number: '227-91-26'},],
  name: ''
}

   


  render() {
       

    return (
    <div>
        <div>main container
          <h1>Phonebook</h1>
          <div>add area
            <div> name input
              <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
            </div>
            <div>phone input
                <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
            </div>
          </div>
          <div>contacts container
              <h1>Contacts</h1>
          </div>
       </div>
    </div>
  );
  }
  
};