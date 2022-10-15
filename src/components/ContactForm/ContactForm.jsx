import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { FormContainer, FromInput, SubmitButton } from "./ContactForm.styled";


export class ContactForm extends React.Component {



  state = {
    name: '',
    number: ''
    };

  formNameId = nanoid(3);
  formNumberId = nanoid(3);


    handleInputChange = (e) => {
      const { name, value } = e.currentTarget;
      
      console.log(e.currentTarget.name)
      this.setState({ [name]: value })
  };

   handleOnSubmit = e => {
     e.preventDefault();
     
       this.props.onFormSubmit(this.state);
       this.reset();
   }
    
    
    reset = () => {
        this.setState({name: '', number: ''})
    }
  
  render() {

       

    return (
    
        <FormContainer onSubmit={this.handleOnSubmit}>
            <label htmlFor={this.formNameId} >Name</label>
             <FromInput
                  onChange={this.handleInputChange}
                  id={this.formNameId}
                  type="text"
                  placeholder="Type name"
                  value={this.state.name}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <label htmlFor={this.formNumberId} >Number</label>
             <FromInput
                  onChange={this.handleInputChange}
                  id={this.formNumberId}
                  value={this.state.number}
                  placeholder="Type number"
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              <SubmitButton type="submit">Add contact</SubmitButton>
              </FormContainer>
  );
  }
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}