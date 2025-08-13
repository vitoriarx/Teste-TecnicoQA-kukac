describe('Acessibilidade • Smoke', () => {
  it('kanBan sem violações críticas', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
  });
});
