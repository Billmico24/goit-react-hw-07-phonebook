export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
          {contacts.map(el => (
              <li key={el.id}>{el.name}:  {el.number}
              <button type="button" onClick={() => onDeleteContact(el.id)}>x</button></li>
          ))}
            </ul>)
}