describe('Acessibilidade • Smoke', () => {
  it('Kanban - logar violações críticas e sérias sem falhar o teste', () => {
    cy.visit('/');
    cy.injectAxe();

    cy.checkA11y(
      null,
      { includedImpacts: ['critical', 'serious'] },
      (violations) => {
        if (violations.length) {
          cy.task('log', ` ${violations.length} violações de acessibilidade encontradas:`);
          violations.forEach(v => {
            cy.task('log', `${v.id} [${v.impact}] - ${v.help} (${v.nodes.length} elementos)`);
          });
        }
      }
    );
  });
});
