import styled from "@emotion/styled";

export const FormContainer = styled.form`
margin: 0 auto;
display:flex;
flex-direction: column;
gap: 10px;
border-radius: 5px;
max-width: 330px;
box-shadow: ${props => props.theme.filters.shadow};
padding: 10px;
background-image: ${props => props.theme.gradients.grey};
text-transform: uppercase;
`;

export const FromInput = styled.input`
    /* width: 70%; */
    height: 20px;
    margin-bottom: 8px;
    /* border: none; */
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    border-width: 1px;
    background-color: rgb(242, 191, 94, 0);
    /* margin: 0 auto; */
`;

export const SubmitButton = styled.button`
    width: 150px;
    margin: 0 auto;
    /* margin-top: 10px; */
padding: 5px;
font-weight: 700;
text-transform: uppercase;
border: none;
color: rgb(45, 45, 45);
border-radius: 5px;
box-shadow: ${props => props.theme.filters.shadow};
/* border-width: 1px; */
background-color: rgb(242, 191, 94, 0);
:hover {
   background-color: rgba(192,198,230,0.3); 
}
:active {
  /* background-color: rgb(242, 191, 94, 0.9); */
    transform: translateY(1px);
`;