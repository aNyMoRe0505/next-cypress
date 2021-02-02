describe('test', () => {
  before(() => {
    cy.viewport('iphone-x');
    cy.visit('http://localhost:3000/');
  });

  it('test1', () => {
    cy.contains('forgot_password_error_empty').should('not.exist');
    cy.get('#inputId').focus();
    cy.get('#inputId').blur();
    cy.contains('forgot_password_error_empty');
  });
});
