describe("Cenario de Teste Cadastro", () => {
  const email = "testeTray1@yopmail.com";
  const nome = "UserTeste";
  const senha = "Teste123!";
  //Cadastro usuario comum
  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get("#email").click().type("testeTray1@yopmail.com");
    cy.get("#senha").click().type("Teste123");
    cy.get(".btn").click();
    cy.contains("Problemas com o login do usuário").should('be.visible');
  });

  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get(".btn").click();
    cy.contains("Email é um campo obrigatório").should('be.visible');
    cy.contains("Senha é um campo obrigatório").should('be.visible');
  });
});
