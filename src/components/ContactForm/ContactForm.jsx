
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from "redux/contactsOperations";
import { nanoid } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import { FormContainer, FromInput, SubmitButton } from "./ContactForm.styled";

export function ContactForm() {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


 const onSubmitHandler = e => {
    e.preventDefault();
    console.dir(e.target.elements);
    const sameName = contacts.find(
      contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase()
    );
   
    if (sameName) {
      return toast.error(`${sameName.name} is already in contacts`);
    } 
    dispatch(addContact({
      id: nanoid(5),
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value
    }));
    e.target.reset();
  };

  let formNameId = nanoid(3);
  let formNumberId = nanoid(3);

  return (
    <FormContainer onSubmit={onSubmitHandler}>
            <label htmlFor={formNameId}>Name</label>
             <FromInput
                  id={formNameId}
                  type="text"
                  placeholder="Type name"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
      />
      <label htmlFor={formNumberId} >Number</label>
             <FromInput
                  
                  id={formNumberId}
                  placeholder="Type number"
                  type="tel"
                  name="phone"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              <SubmitButton type="submit">Add contact</SubmitButton>
            
    </FormContainer>
               
  )
  
};
