///<reference types="cypress"/>


it('Login Realizado com Sucesso', function(){

    cy.visit('/login')
    
        cy.get('#nickId').type('papitorocks')
         // .should('have.value','papitorocks')

        cy.get('#passId').type('pwd123')
        
        cy.get('button[type=submit]').click()

        cy.get('h3[class^="title"]')
            .should('have.text',   'Olá Papito, bem-vindo ao Orkut')
        
            const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
        
            cy.get('p[class=subheader]').should('have.text', expectedText)
                
            cy.get('a[class="button is-danger"]').click()

                cy.get('div[class="message-body success"]').should('contain', 'Você saiu da área logada!')







})

