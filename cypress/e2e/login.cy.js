describe('Login Flow Correct Credentials', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid Credentials', () => {
    cy.get('input[type="email"]').type('tonho2323@example.com')
    cy.get('input[type="password"]').type('SENHA123@')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Invalid Credentials', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with invalid Credentials', () => {
    cy.get('input[type="email"]').type('tonho23@example.com')
    cy.get('input[type="password"]').type('SENHA1253@')
    cy.get('button[type="submit"]').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})