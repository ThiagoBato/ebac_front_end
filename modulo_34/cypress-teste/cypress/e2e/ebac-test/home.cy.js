/// <reference types="cypress" />

describe('Inclusão de Contato', () => {
  it('Deve incluir um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.get('input[placeholder="Nome"]').type('Novo Contato');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('input[placeholder="E-mail"]').type('novocontato@example.com');
    cy.get('button.adicionar').click();

    cy.contains('.contato', 'Novo Contato').should('exist');
  });
});

describe('Alteração de Contato', () => {
  it('Deve alterar um contato existente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.get('.contato button.edit').click({ multiple: true });
    cy.get('input[placeholder="Nome"]').clear().type('Contato Modificado');
    cy.get('input[placeholder="Telefone"]').clear().type('987654321');
    cy.get('input[placeholder="E-mail"]').clear().type('contatomodificado@example.com');
    cy.get('button.alterar').click();

    cy.contains('.contato', 'Contato Modificado').should('exist');
  });
});

describe('Remoção de Contato', () => {
  it('Deve remover um contato existente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.get('.contato button.delete').as('btn').click({ multiple: true });

    cy.contains('.contato', 'Contato Existente').should('not.exist');
  });
});
