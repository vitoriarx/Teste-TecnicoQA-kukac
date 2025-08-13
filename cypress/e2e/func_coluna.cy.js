/// <reference types="cypress" />

describe('Acesso a coluna', () => {
  const nomeColuna = 'Coluna de teste (Cypress)';

  beforeEach(() => { 
    Cypress.config('defaultCommandTimeout', 10000);
    cy.clearLocalStorage();
    cy.visit('/');
    cy.get('body', { timeout: 10000 }).should('be.visible'); //pra deixar o tempo de carregamento mais longo
  });

  it('Criação de coluna', () => {
    cy.log('Abrindo criador de coluna');
    cy.get('.sc-jqUVSM > .custom-input > p').click();

    cy.log('Digitando o nome e salvando');
    cy.get('.sc-gsnTZi').clear().type(nomeColuna);
    cy.get('.btn').click();

    cy.log('Validando presença e persistência');
    cy.contains(nomeColuna, { timeout: 10000 }).should('exist');
    cy.reload();
    cy.contains(nomeColuna).should('exist');

    cy.log('Coluna criada e persistente');
  });

  

  it('Exclui a primeira coluna', () => {
    cy.get(':nth-child(1) > .header > .board-header-title').should('exist'); // Garante que existe ao menos 1 coluna
    cy.get(':nth-child(1) > .header').trigger('mouseenter', { force: true }); // Garante que o header está visível
    cy.get(':nth-child(1) > .header svg').last().click({ force: true }); // Clica no ícone de lixeira

    cy.get(':nth-child(1) > .header > .board-header-title') // Verifica se a coluna foi removida
      .should('not.have.text', nomeColuna);
  });


});