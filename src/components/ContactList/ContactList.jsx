import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { ContactsTable, TableHeaders, TableRows, TableData, DeleteButton } from "./ContactList.styled";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = findContacts();
  
  return (
      
    <ContactsTable >
      <thead>
        <TableRows>
          <TableHeaders>Name</TableHeaders>
          <TableHeaders>Phone number</TableHeaders>
          <TableHeaders></TableHeaders>
        </TableRows>
      </thead>
      
      <tbody>
        {filteredContacts.map(el => (
          <TableRows key={el.id}>
            <TableData>{el.name}</TableData>
            <TableData>{el.number}</TableData>
            <TableData><DeleteButton type="button" onClick={() => dispatch(removeContact(el.id))}>delete</DeleteButton></TableData>
          </TableRows>
        ))}
      </tbody>
    </ContactsTable>
  )
};


