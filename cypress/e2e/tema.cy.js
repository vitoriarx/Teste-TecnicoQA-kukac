// cypress/e2e/tema.cy.js
describe('Verificar a mudança do tema', () => {
  const TOGGLE_BG = '.react-switch-bg'; // pega a cor de fundo do botão de alteração de tema
  const TOGGLE_HANDLE = '.react-switch-handle, .react-switch-handle-off, .react-switch-handle-on'; // seletor da parte móvel do botão

  const getBg = ($el) => getComputedStyle($el[0]).backgroundColor; // função auxiliar para capturar a cor de fundo

  beforeEach(() => { 
    cy.visit('/'); 
    cy.get(TOGGLE_BG, { timeout: 10000 }).should('be.visible'); // garante que o botão de altera esteja visível
  });

  it('Alterna o tema validando cor do botão ou posição do handle', () => {
    cy.get(TOGGLE_BG).then($bg => cy.wrap(getBg($bg)).as('bgBefore')); // guarda a cor inicial
    cy.get(TOGGLE_HANDLE).invoke('css', 'transform').as('posBefore'); // guarda a posição inicial do handle

    cy.get(TOGGLE_BG).click(); // clica para alterar o tema

    cy.get(TOGGLE_BG).then($bg => {
      const bgAfter = getBg($bg);
      cy.get('@bgBefore').then(bgBefore => {
        if (bgAfter !== bgBefore) { 
          expect(bgAfter, 'Cor do botão após o clique deve mudar').to.not.equal(bgBefore); // valida mudança pela cor
        } else { 
          cy.get('@posBefore').then(posBefore => {
            cy.get(TOGGLE_HANDLE, { timeout: 2000 })
              .invoke('css', 'transform')
              .should(posAfter => {
                expect(posAfter, 'Handle deve mudar de posição').to.not.equal(posBefore); // valida mudança pela posição
              });
          });
        }
      });
    });

    cy.get(TOGGLE_BG).click(); // clica para voltar ao tema original

    cy.get(TOGGLE_BG).then($bg => {
      const bgAfter2 = getBg($bg);
      cy.get('@bgBefore').then(bgBefore => {
        if (bgAfter2 === bgBefore) { 
          expect(bgAfter2).to.equal(bgBefore); // valida retorno pela cor
        } else { 
          cy.get('@posBefore').then(posBefore => {
            cy.get(TOGGLE_HANDLE, { timeout: 2000 })
              .invoke('css', 'transform')
              .should(posAfter => {
                expect(posAfter, 'Handle deve voltar à posição inicial').to.equal(posBefore); // valida retorno pela posição
              });
          });
        }
      });
    });
  });
});
