describe("Cenario de Teste Login Invalido", () => {
  const email = "testeTray1@yopmail.com";
  const nome = "UserTeste";
  const senha = "Teste123!";
  //Login senha invalida
  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get("#email").click().type("testeTray1@yopmail.com");
    cy.get("#senha").click().type("Teste123");
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains("Problemas com o login do usuário").should('be.visible');
  });

    //Login email invalido
    it("passes", () => {
      cy.visit("https://seubarriga.wcaquino.me/login");
      cy.get("#email").click().type("testeTray2@yopmail.com");
      cy.get("#senha").click().type("Teste123!");
      cy.get(".btn").click();
      cy.wait(1000);
      cy.contains("Problemas com o login do usuário").should('be.visible');
    });

  //Login campos vazios
  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains("Email é um campo obrigatório").should('be.visible');
    cy.contains("Senha é um campo obrigatório").should('be.visible');
  });
});
