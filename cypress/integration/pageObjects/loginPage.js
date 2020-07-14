class LoginPage {

    loginButton() {
        return cy.get('.form-inline > .btn-login')
    }

    userName() {
        return cy.get('[data-testid=username-input]')
    }

    password() {
        return cy.get('[data-testid=password-input]')
    }

    loginSubmitButton() {
        return cy.get('[data-testid=login-submit-button]')
    }

    errorMessage() {
        return cy.get('[data-testid=login-error]')
    }

}

export default LoginPage;