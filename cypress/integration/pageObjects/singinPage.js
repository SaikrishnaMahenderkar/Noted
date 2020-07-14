class singinPage {
    singinButton() {
        return cy.get('.form-inline > .btn')
    }

    firstNameText() {
        return cy.get('#firstName')
    }

    lastNameText() {
        return cy.get('#lastName')
    }

    legalName() {
        return cy.get('#legalName')
    }
    
    phoneNumber() {
        return cy.get('#phone')
    }

    email() {
        return cy.get('#email')
    }

    userNameText() {
        return cy.get('#username')
    }

    passwordText() {
        return cy.get('#password')
    }

    confirmPasswordText() {
        return cy.get('#confirmPassword')
    }

    checkBox() {
        return cy.get('.css-1fmvox2 > .css-mhfgm > label')
    }

    signinSubmitButton() {
        return cy.get('.css-prv5jh')
    }
}

export default singinPage;