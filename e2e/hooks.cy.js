///<reference types="cypress"/>

before(function() {
    cy.log();('Aqui Temos algo que roda antes de todos os testes')
})

beforeEach(() => {
    cy.log('Aqui temos algo que roda antes de CADA teste')

})

it('teste 1', function (){
    cy.log('testando o teste 1')
})

it('teste 2', function (){
    cy.log('testando o teste 2')
})

it('teste 3', function (){
    cy.log('testando o teste 3')
})

afterEach( function (){
    
    cy.log('Aqui temos algo que roda antes de CADA teste')
})

afterEach(function (){

    cy.log('Aqui temos algo que roda antes de CADA testes')
})





