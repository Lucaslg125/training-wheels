///<reference types="cypress"/>



it(' Deve selecionar uma única opção', function () {
    
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()

})
 
it('deve selecionar multiplas opções', function (){

    cy.visit('/apps/select2/index.html')
    
    cy.get('.select2-selection--multiple').click()
    cy.contains('.select2-results__option', 'Cypress').click()

    cy.get('.select2-selection--multiple').click()
    cy.contains('.select2-results__option', 'Robot Framework').click()





})
    
    

