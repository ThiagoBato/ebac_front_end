import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../actions/contactActions';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const ContactListContainer = styled.div`
  margin: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 0;
  }
`;

const ContactListTable = styled.table`
  width: 100%;
  @media (max-width: 768px) {
    border-collapse: collapse;
  }
`;
const ContactItem = styled.tr`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #eee;
`;
const ContactLabel = styled.th`
  font-weight: bold;
  margin-right: 10px;
  text-align: left;
`;

const ContactValue = styled.span`
  max-width: 225px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 150px;
  }
  @media (max-width: 480px) {
    max-width: 100px;
  }
  @media (max-width: 340px) {
    max-width: 75px;
  }
`;

const ButtonEdit = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  background-color: #0d6efd;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    background-color: #fff;
  }
  @media (max-width: 768px) {
    padding: 5px 10px;
    width: 75px;
    margin: 0px;
  }
`;

const ButtonRemove = styled.button`
  padding: 10px 20px;
  background-color: #d82d2f;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
  @media (max-width: 768px) {
    width: 75px;
    padding: 5px 10px;
  }
`;

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState(null);

  const handleRemove = (id) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleSave = (updatedContact) => {
    dispatch(editContact(updatedContact));
    setEditingContact(null);
  };

  return (
    <ContactListContainer>
      <ContactListTable>
        <tr>
          <ContactLabel>Nome:</ContactLabel>
          <ContactLabel>E-mail:</ContactLabel>
          <ContactLabel>Telefone:</ContactLabel>
          <th></th>
        </tr>
        {contacts.map((contact) => (
          <ContactItem key={String(contact.id)}>
            <td>
              <ContactValue>{contact.name}</ContactValue>
            </td>
            <td>
              <ContactValue>{contact.email}</ContactValue>
            </td>
            <td>
              <ContactValue>{contact.phone}</ContactValue>
            </td>
            <td align="right">
              <ButtonEdit onClick={() => handleEdit(contact)}>Editar</ButtonEdit>
              <ButtonRemove onClick={() => handleRemove(contact.id)}>Remover</ButtonRemove>
            </td>
          </ContactItem>
        ))}
      </ContactListTable>
      {/* <ul>
        {contacts.map((contact) => (
          <ContactItem key={String(contact.id)}>
            <div>
              <ContactLabel>Nome:</ContactLabel>
              <ContactValue>{contact.name}</ContactValue>
            </div>
            <div>
              <ContactLabel>E-mail:</ContactLabel>
              <ContactValue>{contact.email}</ContactValue>
            </div>
            <div>
              <ContactLabel>Telefone:</ContactLabel>
              <ContactValue>{contact.phone}</ContactValue>
            </div>
            <ButtonEdit onClick={() => handleEdit(contact)}>Editar</ButtonEdit>
            <ButtonRemove onClick={() => handleRemove(contact.id)}>Remover</ButtonRemove>
          </ContactItem>
        ))}
      </ul> */}
      {editingContact && (
        <div>
          <ContactForm editingContact={editingContact} onSave={(updatedContact) => handleSave(updatedContact)} onCancel={() => setEditingContact(null)} />
        </div>
      )}
    </ContactListContainer>
  );
};

export default ContactList;
