describe('Testes na Home', () => {
  it('Abre a página', () => {

    cy.visit('/')

  })

  it('Abre a página Index', () => {

    cy.visit('/index.html')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da Página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get(':nth-child(1) > .title-page').should('have.text', 'SAPATARIA DO ARNALDO DESDE 1940');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Sub-Título da Página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('main > :nth-child(2)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Rodapé da Página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.baseboard').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/index.html');
    /* ==== End Cypress Studio ==== */
  });
})