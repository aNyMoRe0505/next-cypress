describe('test', () => {
  before(() => {
    cy.viewport('iphone-x');
    cy.visit('http://localhost:3000/cimode');
  });

  it('test1', () => {
    cy.contains('test').should('not.exist');
    cy.get('#inputId').focus();
    cy.get('#inputId').blur();
    cy.contains('test');
  });
});
