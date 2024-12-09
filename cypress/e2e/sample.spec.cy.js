// cypress/integration/sample.spec.js
describe('Sample Cypress Test', () => {
  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io')
    cy.contains('Kitchen Sink').click()
  })
})
