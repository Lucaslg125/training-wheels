///<reference types="cypress"/>


it('deve fazer o upload da minha foto', function () {
    
    cy.visit('/upload')

    const imageFile = 'cypress/download/papito.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force:true})

    cy.get('input[value=upload').click()

  

})
 






    
    

