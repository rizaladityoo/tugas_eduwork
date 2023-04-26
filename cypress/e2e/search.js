const { Given, When, Then, And } = require('@badeball/cypress-cucumber-preprocessor');
import SearchPage from './search.page';

Given('the user is on the homepage', () => {
    SearchPage.visit()
})

When('the user enters "zero" in the search bar', () => {
    SearchPage.fillSearch('zero')
    SearchPage.search()
})

Then('the search results page should be displayed' , () => {   
    cy.get('.top_offset h2').should('contain', 'Search Results');
    cy.get('.top_offset li').should('contain', 'Zero');
})

