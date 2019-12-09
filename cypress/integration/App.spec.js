describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('verify times', () => {
        cy.visit('/');
        cy.get('[data-cy=time]').should('contain', ':00');
    })

    it ('clicks button', () => {
      cy.visit('/');
      cy.get('[data-cy=addButton]').click();
      cy.get('[data-cy=startTime]').should('contain', "2019-10-26T10:30");
  })
});