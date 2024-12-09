// cypress/integration/sample.spec.js
// describe('Sample Cypress Test', () => {
//   it('Visits the Cypress website', () => {
//     cy.visit('https://www.cypress.io')
//     cy.contains('Kitchen Sink').click()
//   })
// })

describe('Sample Cypress Test', () => {
  // Ignore specific uncaught exceptions
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes("Cannot read properties of null")) {
      return false;
    }
  });

  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io');
    cy.contains('Kitchen Sink', { timeout: 10000 }).should('be.visible').click();
  });
});

