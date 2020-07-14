// Sample DemoTest Noted
///  <reference types= "cypress" />

import LoginPage from '../pageObjects/loginPage';
import singinPage from '../pageObjects/singinPage';

describe('HomePage', function() {

    beforeEach(function () {
        cy.fixture('example').then(function (data) 
        {
            this.data = data
        })
    })

    it('visit HomePage', () => {
        cy.visit('https://www.noted.com/')
        cy.get('.foot-partners').scrollIntoView({ duration: 10000 });
        cy.get('.foot-partners>.d-flex>').should('have.length', 4)
    })

    it('login with invalid cridentials', function() {

        const login=new LoginPage()

        login.loginButton().click();
        login.userName().type(this.data.userName)
        login.password().type(this.data.password)
        login.loginSubmitButton().click()
        login.errorMessage().should('have.text', this.data.errorMessage)
        cy.go('back')
    })

    it('sign with valid credentials', function() {
        const singin= new singinPage()
        
        singin.singinButton().click()
        singin.firstNameText().type(this.data.firstName).should('have.value', this.data.firstName)
        singin.lastNameText().type(this.data.lastName).should('have.value',this.data.lastName)
        singin.legalName().type(this.data.legalName).should('have.value',this.data.legalName)
        singin.phoneNumber().type(this.data.phoneNumber).should('have.value',this.data.phoneNumber)
        singin.email().type(this.data.email).should('have.value',this.data.email)
        singin.userNameText().type(this.data.userName).should('have.value',this.data.userName)
        singin.passwordText().type(this.data.password).should('have.value',this.data.password)
        singin.confirmPasswordText().type(this.data.confirmPassword).should('have.value',this.data.confirmPassword)
        singin.checkBox().click()
        singin.signinSubmitButton().click()

    })
})