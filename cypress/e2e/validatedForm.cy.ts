// https://on.cypress.io/api

describe('ValidatedForm', () => {
  it('submits the validated form', () => {
    cy.visit('/')
    cy.get('[data-name="email"]').type('test@gmail.nl')
    cy.get('[data-name="password"]').type('testPassword')

    cy.get('[data-name="submit-button"]').click()
    cy.get('div').contains('Form successfully submitted')
  })
  it('submits the validated form with invalid data', () => {
    cy.visit('/')
    cy.get('[data-name="submit-button"]').click()

    cy.get('[data-name="email-error"]').contains('email is a required field')
    cy.get('[data-name="password-error"]').contains('password is a required field')

    cy.get('[data-name="email"]').type('wrong')
    cy.get('[data-name="password"]').type('wrong')
    cy.get('[data-name="submit-button"]').click()

    cy.get('[data-name="email-error"]').contains('email must be a valid email')
    cy.get('[data-name="password-error"]').contains('password must be at least 6 characters')
  })
})
