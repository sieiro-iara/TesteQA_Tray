describe("Cenario de Teste Cadastro", () => {
  const email = "testeTray1@yopmail.com";
  const nome = "UserTeste";
  const senha = "Teste123!";
  //Cadastro usuario comum
  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get("#email").click().type("testeTray1@yopmail.com");
    cy.get("#senha").click().type("Teste123!");
    cy.get(".btn").click();
    cy.contains('Bem vindo, '+ nome + '!').should('be.visible');
  });
});
