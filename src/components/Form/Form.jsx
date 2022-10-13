import React from "react";
import { nanoid } from 'nanoid'
import { FormContainer, FromInput, SubmitButton } from "./Form.styled";


export class Form extends React.Component {

  state = {
        name: ''
    };

    formNameId = nanoid(3);
    handleNameChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({ name: value })
  };

   handleOnSubmit = e => {
    e.preventDefault();
       this.props.onFormSubmit(this.state);
       this.reset();
   }
    
    
    reset = () => {
        this.setState({name: ''})
    }
  render() {

       

    return (
    
        <FormContainer onSubmit={this.handleOnSubmit}>
            <label htmlFor={this.formNameId} >Name</label>
             <FromInput
                onChange={this.handleNameChange}
                id={this.formNameId}
                  type="text"
                  value={this.state.name}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              <SubmitButton type="submit">Add contact</SubmitButton>
              </FormContainer>
  );
  }
  
};
