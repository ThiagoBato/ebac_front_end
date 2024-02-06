/// <reference types="cypress" />

describe('Inclusão de Contato', () => {
  it('Deve incluir um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.get('input[placeholder="Nome"]').type('Fulano');
    cy.get('input[placeholder="Telefone"]').type('5554999999999');
    cy.get('input[placeholder="E-mail"]').type('novocontato@novocontato.dev');
    cy.get('button.adicionar').click();

    cy.contains('.contato', 'Fulano').should('exist');
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

    cy.get('input[placeholder="Nome"]').type('Fulano');
    cy.get('input[placeholder="Telefone"]').type('5554999999999');
    cy.get('input[placeholder="E-mail"]').type('novocontato@novocontato.dev');
    cy.get('.contato button.delete').click({ multiple: true });

    cy.contains('.contato', 'Fulano').should('not.exist');
  });
});
