describe('Form-Testing', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Creates a booking", () => {
    cy.get('[data-cy="input-name"]').type("sam");
    cy.get('[data-cy="input-address"]').type("home");
    cy.get('[data-cy="input-phone"]').type("206");
    cy.get('[data-cy="input-cuisine"]').type("seafood");
    cy.get('[data-cy="input-rating"]').type("5");
    
    cy.get('[data-cy="rating-form"]').submit();
    
    cy.get(`[data-cy="sam"] ul`).within(() => {
       cy.contains('li', 'home').should('be.visible');
       cy.contains('li', '206').should('be.visible');
       cy.contains('li', 'seafood').should('be.visible');
       cy.contains('li', '5').should('be.visible');
     });
 
  })
  
  it("Creates a booking2", () => {
    cy.get('[data-cy="input-name"]').type("TestResturant");
    cy.get('[data-cy="input-address"]').type("_____");
    cy.get('[data-cy="input-phone"]').type("206-111-1111");
    cy.get('[data-cy="input-cuisine"]').type("Everything");
    cy.get('[data-cy="input-rating"]').type("5");
    
    cy.get('[data-cy="rating-form"]').submit();
    
    cy.get(`[data-cy="TestResturant"] ul`).within(() => {
       cy.contains('li', '_____').should('be.visible');
       cy.contains('li', '206-111-1111').should('be.visible');
       cy.contains('li', 'Everything').should('be.visible');
       cy.contains('li', '5').should('be.visible');
     });
 
  })
})
