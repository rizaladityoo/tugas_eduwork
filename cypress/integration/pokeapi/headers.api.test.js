/// <reference types="cypress"/>
describe('Successfully validate content-type', () => {
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').should((response) => {
            expect(response.body.abilities[1].ability).to.have.property('name', 'imposter') 
        })

    });
});