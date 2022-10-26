///<reference types="cypress"/>


it(' deve exibir a mensagem de sucess no popup', function (){
   
    cy.visit('/sweet_alert')
    cy.contains('button', 'Sucesso').click()

    cy.get('.swal-text')
        .should('have.text', 'V+ocê clicou no botão verde.')
   
})

it('deve exibir a mensagem deu ruim no poup', function (){

    cy.visit('/sweet_alert')

    cy.contains('button', 'Deu Ruim').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão vermelho.')
})
 