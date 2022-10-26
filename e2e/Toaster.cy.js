///<reference types="cypress"/>


it(' deve exibir uma notificação Toast', function (){
   
    cy.visit('/toaster')
    cy.contains('button', 'Toast Rápido').click()

    cy.get('.notification')
    .should('be.visible')
    .should('have.text', 'Essa notificação é muita rápida')

    //cy.get('body')

  //dd  cy.wait(3000)


})
 