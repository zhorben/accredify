describe('Home Page', () => {
  it('displays information for a regular user', () => {
    cy.visit('/regular')

    // Check that the username is displayed
    cy.get('h2').should('contain', 'Hi,')
    cy.get('h2')
      .invoke('text')
      .should('match', /Hi,\s+\w+/)

    // Check for the presence of the document list
    cy.get('[data-testid="document-list"]').should('exist')

    // Check that documents have loaded
    cy.get('[data-testid="document-list"]')
      .find('tr')
      .should('have.length.gt', 1)

    // Check for the absence of the career goal section
    cy.get('[data-testid="career-goal"]').should('not.exist')

    // Open the user menu
    cy.get('[data-testid="user-menu"]').click()

    // Click the logout button
    cy.get('[data-testid="logout-button"]').click()

    // Check that the URL has changed to /personal
    cy.url().should('include', '/personal')
  })

  it('displays information for a personal user', () => {
    cy.visit('/personal')

    // Check that the username is displayed
    cy.get('h2').should('contain', 'Hi,')
    cy.get('h2')
      .invoke('text')
      .should('match', /Hi,\s+\w+/)

    // Check for the presence of the document list
    cy.get('[data-testid="document-list"]').should('exist')

    // Check that documents have loaded
    cy.get('[data-testid="document-list"]')
      .find('tr')
      .should('have.length.gt', 1)

    // Check for the presence of the career goal section
    cy.get('[data-testid="career-goal"]').should('exist')

    // Check that the career goal has loaded
    cy.get('[data-testid="career-goal"]').should('contain', 'Career Goal')
    cy.get('[data-testid="career-goal"]').find('h4').should('not.be.empty')

    // Open the user menu
    cy.get('[data-testid="user-menu"]').click()

    // Click the logout button
    cy.get('[data-testid="logout-button"]').click()

    // Check that the URL has changed to /regular
    cy.url().should('include', '/regular')
  })
})
