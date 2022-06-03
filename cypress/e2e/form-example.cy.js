describe('Login functionality', () => {
  it('should logged in succesfully', () => {
    cy.visit('https://www.saucedemo.com/');

    // input username
    cy.get('[data-test="username"]').type('standard_user');

    // input password
    cy.get('[data-test="password"]').type('secret_sauce');
    

    // click login
    cy.get('[data-test="login-button"]').click();

    // assertion should successfully login
    cy.url().should('include', 'inventory.html');

  })
})
