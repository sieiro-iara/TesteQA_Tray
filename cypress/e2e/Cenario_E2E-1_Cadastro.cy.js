describe("Cenario de Teste Cadastro", () => {
  //Cadastro usuario comum
  it("passes", () => {
    cy.gerarEmailYopmail().then((emailGerado) => {
      cy.visit("https://seubarriga.wcaquino.me/login");
      cy.get(':nth-child(2) > a').click();
      cy.get('#nome').click().type("TesteUser");
      cy.get('#email').click().type(emailGerado);
      cy.get('#senha').click().type("Teste123");
      cy.get('.btn').click();
      cy.contains('Usuário inserido com sucesso').should('be.visible');
    });
  });
//Validar mensagem campos obrigatorios
 it('passes', () => {
      cy.visit("https://seubarriga.wcaquino.me/login");
      cy.get(':nth-child(2) > a').click();
      cy.get('.btn').click();
      cy.contains('Nome é um campo obrigatório').should('be.visible');
      cy.contains('Email é um campo obrigatório').should('be.visible');
      cy.contains('Senha é um campo obrigatório').should('be.visible');
    });
  });