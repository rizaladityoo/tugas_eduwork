const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import LoginPage from './login.page';

Given('I open login page', () => {
   LoginPage.visit()
})

When('I submit login', () => {
   LoginPage.fillUsername('username')
   LoginPage.fillPassword('password')
   LoginPage.signIn()
})

Then('I should see homepage', () => {
   cy.get('#account_summary_tab').should('be.visible')
})
