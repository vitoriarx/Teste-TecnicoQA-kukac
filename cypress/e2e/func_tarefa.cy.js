/// <reference types="cypress" />

describe('Funcionalidade: Tarefas no Kanban', () => {
    const nomeTarefa = 'Tarefa de teste';
    const nomeTarefaEditada = 'Tarefa editada (Cypress)';

    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit('/');
        cy.contains(/kanban/i).should('be.visible');
    });

    it('Criação de uma nova tarefa', () => {
        cy.log('Criando uma nova tarefa');
        cy.contains(/Adicionar tarefa/i).click();
        cy.get('.sc-gsnTZi').type(nomeTarefa);
        cy.get('.btn').click();
        cy.contains(nomeTarefa).should('exist');
        cy.log('Tarefa criada com sucesso');
    });

    it("Edição de uma tarefa", () => {
        const nomeTarefa = 'Tarefa de teste';
        const nomeTarefaEditada = 'tarefa foi editada';

        cy.contains(/Adicionar tarefa/i).click(); // garante que existe uma tarefa para editar
        cy.get('.sc-gsnTZi').clear().type(nomeTarefa);
        cy.get('.btn').click();
        cy.contains(nomeTarefa).should('exist');

        cy.contains('div[draggable="true"]', nomeTarefa, { timeout: 10000 }).click();// abre o card pelo próprio texto da tarefa

        cy.get('[id$="ModalTitle"]').find('.custom-input > p').click(); // foca no campo de título do modal e edita
        cy.get('.sc-gsnTZi').clear().type(nomeTarefaEditada);
        cy.get('.btn').click();

        cy.contains(nomeTarefaEditada).should('exist');    // valida alteração e fecha o modal clicando fora
        cy.get('body').click(0, 0);
    });


    it('Exclusão de uma tarefa', () => {
        cy.log('Excluindo a primeira tarefa');

        cy.get('.drop-list').first().find('div[draggable="true"]').its('length').then((quantidadeAntes) => { // Conta antes
 
        cy.get('.drop-list').first().find('.content header svg').invoke('removeClass', 'trash'); // Torna visível o ícone da lixeira

        cy.get('.drop-list').first().find('.content header svg').first().click({ force: true }); // Clica no ícone da lixeira

        cy.get('.drop-list').first().find('div[draggable="true"]', { timeout: 10000 }) // Verifica se o total diminuiu
            .its('length')
            .should('be.lt', quantidadeAntes);
        });

        cy.log('Tarefa excluída com sucesso');
    });
});
