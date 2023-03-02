Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alef')
    cy.get('#lastName').type('Fernandes')
    cy.get('#email').type('valid.email@gmail.com')
    cy.get('#open-text-area').type('test')
    cy.contains('button', 'Enviar').click()
})
