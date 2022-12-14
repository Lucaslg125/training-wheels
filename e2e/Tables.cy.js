///<reference types="cypress"/>

const { func } = require("assert-plus")
const { expect } = require("chai")


it(' deve exibir 7 séries no Total', function (){
   
    cy.visit('/tables')

    cy.get('table tbody tr')
    
    .then(function(series){
      expect(series).to.have.length(7)

    })

})
 
  it('deve exibir a série loki', function(){
  cy.visit('/tables')

  cy.contains('table tbody tr', 'Loki')
    .then(function(item){

      expect(item).to.contain('Marvel')
      expect(item).to.contain('Disney+')
      expect(item).to.contain('2021')

    })

  })