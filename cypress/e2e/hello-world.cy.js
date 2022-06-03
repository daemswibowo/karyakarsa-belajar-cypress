describe('hello-world.cy.js', () => {
  
  it('Should contain "Hello World!" and "Click Me!" button.', () => {
    // visit halaman websitenya
    cy.visit('https://karyakarsa-cypress-demo.vercel.app/');

    // validate harus ada "Hello World!" dan ada button "Click Me!"
    cy.contains("Hello World!");
    cy.contains("Click Me!");
  });

  it('Should display "Thanks for clicking!" information on clicking "Click Me!" button', () => {
    const btnClickMe = cy.get('[data-testid="btnClickMe"]');

    // simulate click on Click Me! button
    btnClickMe.click();

    cy.contains('Thanks for clicking!');

    // validate thanks for clicking disappear after 3 sec
    cy.wait(3000);
    cy.get('[data-testid="infoThanks"]').should('not.exist');
  });

});
