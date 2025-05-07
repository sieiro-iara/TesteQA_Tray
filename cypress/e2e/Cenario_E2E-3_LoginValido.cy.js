describe("Cenario de Teste Login Valido", () => {
  const email = "testeTray1@yopmail.com";
  const nome = "UserTeste";
  const senha = "Teste123!";
  //Login usuario valido
  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get("#email").click().type("testeTray1@yopmail.com");
    cy.get("#senha").click().type("Teste123!");
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains('Bem vindo, '+ nome + '!').should('be.visible');
    cy.url().should('eq', 'https://seubarriga.wcaquino.me/logar');
  });
});
