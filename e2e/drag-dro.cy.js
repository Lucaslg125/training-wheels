///<reference types="cypress"/>

describe('Drag and Drop', function () {

    before(() => {

        cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

    });

    it(' deve arrastar o cypress para caixinha do node', function () {

        const dataTransfer = new DataTransfer()

        cy.get('img[alt=Cypress').trigger('dragstart', { dataTransfer })

        cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer })
    })

    it('deve arrastar o robot para a caixinha do python', function () {

        const dataTransfer = new DataTransfer()

        cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })

        cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })


    })


})

