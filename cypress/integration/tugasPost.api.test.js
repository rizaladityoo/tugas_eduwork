/// <reference types="cypress"/>
describe('Create User', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Fathur Rohim',
            "job": 'Test Engineer'
        } 
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal("Fathur Rohim")
            expect(response.body.job).equal("Test Engineer")
        })
    })
});
