///<reference types="cypress"/>


it(' deve marcar os top 5 filmes da MarvelCheck Boxs', function () {

    cy.visit('/checkboxes')

    const movies = [

       'avengers',
       'cap2',
       'guardians',
       'blackpanther',
       'thor3' 

    ] 

        movies.forEach(function(m){
            cy.get(`input[name=${m}]`).click()
            .should('be.checked')


        })
    })
    
    

