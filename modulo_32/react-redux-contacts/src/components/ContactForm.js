import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../actions/contactActions';
import styled from 'styled-components';

const ContactFormContainer = styled.div`
  margin: 20px auto;
`;

const ContactFormTitle = styled.h2`
  margin: 20px auto;
  text-align: center;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Fieldset = styled.fieldset`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 8px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const ContactFormButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const ButtonAdd = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  background-color: #198754;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
const ButtonCancel = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  background-color: #d82d2f;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;

const ContactForm = ({ editingContact, onCancel }) => {
  const [formData, setFormData] = useState(editingContact || { name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(editingContact || { name: '', email: '', phone: '' });
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      dispatch(editContact({ ...formData, id: editingContact.id }));
      onCancel();
    } else {
      dispatch(addContact({ ...formData, id: new Date().getTime() }));
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ContactFormContainer>
      <ContactFormTitle>{editingContact ? 'Editar Contato' : 'Adicionar Contatos'}</ContactFormTitle>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
          <Label htmlFor="email">Email:</Label>
          <Input type="text" name="email" id="email" value={formData.email} onChange={handleChange} required />
          <Label htmlFor="phone">Telefone:</Label>
          <Input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
        </Fieldset>

        <ContactFormButtonContainer>
          <ButtonAdd type="submit">{editingContact ? 'Salvar' : 'Adicionar'}</ButtonAdd>
          {editingContact && (
            <ButtonCancel type="button" onClick={onCancel}>
              Cancelar
            </ButtonCancel>
          )}
        </ContactFormButtonContainer>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
