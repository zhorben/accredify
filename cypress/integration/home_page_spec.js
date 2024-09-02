describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/users/*', { fixture: 'user.json' }).as('getUser');
    cy.intercept('GET', '/api/documents', { fixture: 'documents.json' }).as('getDocuments');
    cy.intercept('GET', '/api/career-goals', { fixture: 'careerGoals.json' }).as('getCareerGoals');
    cy.visit('/');
  });

  it('displays user information and documents for a managed user', () => {
    cy.wait(['@getUser', '@getDocuments', '@getCareerGoals']);

    cy.get('h2').should('contain', 'John Smith');
    cy.get('img[alt="John Smith"]').should('be.visible');
    cy.get('p').should('contain', 'john.smith@example.com');
    cy.get('p').should('contain', 'Sample Bank ABC');

    cy.get('h2').should('contain', 'Your Documents');
    cy.get('li').should('have.length.gt', 0);

    cy.get('h2').should('contain', 'Career Goal');
    cy.get('h3').should('contain', 'Account Manager');
  });
});