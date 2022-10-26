///<reference types="cypress"/>


it('Exemplo de timeout', function () {
    
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()

    cy.get('#firstname')
        .should('be.visible')
        .type('fernando', {timeout:7000})
  

})
 






    
    

