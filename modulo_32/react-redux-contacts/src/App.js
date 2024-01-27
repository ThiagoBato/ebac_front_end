import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
const ContactListTitle = styled.h1`
  margin: 20px auto;
  text-align: center;
`;

function App() {
  return (
    <ContactContainer>
      <ContactListTitle>Lista de Contatos</ContactListTitle>
      <ContactList />
      <ContactForm />
    </ContactContainer>
  );
}

export default App;
