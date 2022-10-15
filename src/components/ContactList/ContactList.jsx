import { ContactsTable, TableHeaders, TableRows, TableData, DeleteButton, SpanX } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
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
                {contacts.map(el => (
                    <TableRows key={el.id}>
                    <TableData>{el.name}</TableData>
                    <TableData>{el.number}</TableData>
                    <TableData><DeleteButton type="button" onClick={() => onDeleteContact(el.id)}>delete</DeleteButton></TableData>
                    </TableRows>
                ))}  
      </tbody>
      </ContactsTable>
      )
}



