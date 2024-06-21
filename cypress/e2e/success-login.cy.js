// Scenario: Login Succsseful

// Given: A user need to make a login on site (https://adopet-frontend-cypress.vercel.app/)

// When: A user click on "login" 

// And: Type "Email", "Password" and click on "Sign In"

/// Then: A user need to be redirect to "home page"  

describe('Login Successuful', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();

    })

    it('Needes to type "email","password" and click on "login", after redirect to home', () => {
      cy.get('[data-test="input-loginEmail"]').type ('ana@email.com');
      cy.get('[data-test="input-loginPassword"]').type ('Senha123');
      cy.get('[data-test="submit-button"]').click();
        
    })
})
