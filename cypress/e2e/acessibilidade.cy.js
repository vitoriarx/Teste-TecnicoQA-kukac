describe('Acessibilidade • Smoke', () => {
  it('Kanban - loga violações críticas/sérias sem falhar', () => {
    cy.visit('/');
    cy.injectAxe();

    cy.checkA11y(
      null,
      { includedImpacts: ['critical', 'serious'] },
      (violations) => {
        if (violations.length) {
          cy.log(`${violations.length} violações de acessibilidade encontradas`);
          violations.forEach(v =>
            cy.log(`${v.id} [${v.impact}] - ${v.help} (${v.nodes.length}) -> ${v.helpUrl}`)
          );
        }
        // sem expect pra não falha o teste
      }
    );
  });
});
