const Form_URL = '/#sign-in'
const Form_URL_Reputation = '/reputation'
const Search_Team = 'Manchester City'



describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })
//+ Test case Login Zuju successfully
  it('Navigate to Zuju on successful Login', () => {
    cy.get('[name=email]').type('zujutest+automation@gmail.com')
    cy.get('[name=password]').type('TestAuto123')
    cy.contains('button','Log In').click()
    //cy.hash().should('eq', '#/')
    cy.wait(5000)
      
  })
//+ Test case Navigate to Zuju Reputation
  it('Navigate to Zuju Reputation after successful Login', () => {
    cy.visit(Form_URL_Reputation)
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL_Reputation)     
  })

//+ Test case Navigate Join us and re-login
  it('Join us and login again', () => {
    cy.contains('button', 'Join Us').click()
    cy.wait(5000)
    cy.contains('p', 'Already have an account?')
      .contains('a', 'Log In')
      .contains('Log In').click()
    cy.wait(5000)
    cy.get('[name=email]').type('zujutest+automation@gmail.com')
    cy.get('[name=password]').type('TestAuto123')
    cy.contains('button','Log In').click()
    //cy.hash().should('eq', '#/')
    cy.wait(2000)
      
  })

  //+ Verify Important Notice if existed
  // it('Verify the Important Notice', () => {
  //   cy.get('.MuiTypography-root.MuiTypography-h6.MuiDialogTitle-root.css-u2m93v')
  //   .should('contain', 'Important Notice')
  //   cy.get('[data-testid=CloseIcon]').click()
      
  // })

  //+ Verify Page Header
  it('Verify page header', () => {
    cy.get('.MuiAvatar-img.css-1hy9t21')
    .should('have.attr', 'src', '/images/icon-logo.png')
    cy.get('.MuiTypography-root.MuiTypography-h4.css-fkue0c')
    .should('contain', 'Live Quiz')
    cy.get('.MuiTypography-root.MuiTypography-h4.css-fkue0c')
    .should('contain', 'Predict')
    cy.get('.MuiTypography-root.MuiTypography-h4.css-1ra5uzi')
    .should('contain', 'Teams') 
    cy.get('.MuiTypography-root.MuiTypography-h4.css-fkue0c')
    .should('contain', '#ZujuFans')
    cy.get('.MuiTypography-root.MuiTypography-h4.css-fkue0c')
    .should('contain', 'Fixtures')
    cy.get('[id=settings-option]')
      .should('exist')
    cy.get('[id=notifications-option]')
      .should('exist')        
  })

//+ Navigate to Team tab
  it('Navigate to Team tab', () => {
    cy.get('.MuiTypography-root.MuiTypography-h4.css-1ra5uzi')
    .should('contain', 'Teams').click()     
  })

//+ Search for a Team (not implement yet)
//   it('Search for a Team', () => {
//     cy.xpath('//div[@data-cy="team-list"][.//p[contains(text(),"Manchester City")]]').then(($button) => {
//     if ($button.is(':visible')) {
//       cy.log('visible')
//       cy.wrap($button).click()
//   } else {
//       cy.console.log("Can not find the team!");
//   }
//     //cy.xpath(PickedTeam_AllTeam).click()
//     //cy.hash().should('eq', '#/')
//     cy.wait(5000) 
// })
// })
})
