// simetrik-TC01.spec.js created with Cypress

context('TC01', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com.co')
    })

    it('Search', () => {
        cy.get('[Title="Buscar"]')
          .type('Simetrik')
          .type('{enter}')

          cy.get('[id="rso"]').children().should('have.length.greaterThan', 0)
      })})