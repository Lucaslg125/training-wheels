///<reference types="cypress"/>


it('Home Page', function(){

    cy.visit('https://training-wheels-qaninja.herokuapp.com/')
    
    cy.title().should('contain' , 'Training Wheels')

        cy.get('ul[class=menu-list]').should('be.visible')







})

