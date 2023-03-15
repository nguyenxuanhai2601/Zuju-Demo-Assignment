const Form_URL = '/#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

//+ Verify Log in button
  it('Verify Log in button', () => {
    cy.contains('button','Log In')
      .should('exist')     
  })

//+ Verify Sign up page
  it('Verify Sign Up button', () =>{
    cy.contains('p','Do not have an account?')
      .contains('a', 'Create one')
      .contains('Create one').click()
    cy.get('.MuiTypography-root.MuiTypography-h2.css-1l35ssc', { timeout: 10000 })
      .should('contain', 'Create Your Account')
    cy.get('.MuiTypography-root.MuiTypography-body1.css-1wu7k1j', { timeout: 10000 })
      .should('contain', 'Create an account to participate in contests on Zuju Kickoff to earn rewards.') 
    cy.get('[id=close-button]')
      .should('exist')
    cy.contains('button','Create Account') 
      .should('exist')


    cy.contains('button','Create Account').click()
    cy.get('p')
      .should('contain','Email is required!')
    cy.get('p')
      .should('contain','Password is required!')
    
//+ Navigate back to Log In    
    cy.contains('p', 'Already have an account?')
      .contains('a', 'Log In')
      .contains('Log In').click()
  })

//+ Verify Email & Password require - Login page
  it('Require Email & Password', () => {
    cy.contains('button','Log In').click()
    cy.get('p')
      .should('contain','Email is required!')      
    cy.get('p')
      .should('contain','Password is required!')      
  })

//+ Verify Close button - Login page
  it('Close button - Pop up', () => {
    cy.get('[id=close-button]') 
      .should('exist')  
  }) 

//+ Verify Forgot passwword page
  it('Navigate to Forgot password?', () => {
    cy.contains('a', 'Forgot password?')
      .contains('a', 'Forgot password?').click()
    cy.get('.MuiTypography-root.MuiTypography-h2.css-1l35ssc', { timeout: 10000 })
      .should('contain', 'Forgot your password?')
    cy.get('.MuiTypography-root.MuiTypography-subtitle1.css-1rv23a0', { timeout: 10000 })
      .should('contain', 'Please enter your email address to search for your account') 
    cy.get('[id=close-button]')
      .should('exist')
    cy.contains('a','Back to Login') 
      .should('exist')
    cy.contains('button','Send me a link') 
      .should('exist')

//+ Verify Email require error message - Forgot Password page
    cy.contains('button','Send me a link').click()
    cy.get('p')
      .should('contain','Email is required!')

//+ Back to Login page    
    cy.contains('a','Back to Login').click()    
  })
})
