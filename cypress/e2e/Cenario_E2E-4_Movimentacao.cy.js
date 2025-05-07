describe("Cenario de Movimentacao", () => {
  const email = "testeTray1@yopmail.com";
  const nome = "UserTeste";
  const senha = "Teste123!";
  let contaGerada;
  //Criacao de conta para movimentacao
  it("passes", () => {
    cy.gerarConta().then((conta) => {
      cy.visit("https://seubarriga.wcaquino.me/login");
      cy.get("#email").click().type("testeTray1@yopmail.com");
      cy.get("#senha").click().type("Teste123!");
      cy.get(".btn").click();
      cy.wait(1000);
      cy.get(".dropdown-toggle").click();
      cy.get(".dropdown-menu > :nth-child(1) > a").click();
      cy.wait(1000);
      cy.get("#nome").click().type(conta);
      contaGerada = conta;
      cy.get(".btn").click();
      cy.contains("Conta adicionada com sucesso!").should("be.visible");
    })
   
  }); 
  
  //Criacao e visuzalizacao de movimentacao Despesa
  it("passes", () => {
    cy.visit("https://seubarriga.wcaquino.me/login");
    cy.get("#email").click().type("testeTray1@yopmail.com");
    cy.get("#senha").click().type("Teste123!");
    cy.get(".btn").click();
    cy.wait(1000);
    cy.get(':nth-child(3) > a').click();
    cy.wait(1000);
    cy.get('#tipo').select("Despesa");
    cy.get('#data_transacao').click().type("07/05/2025");
    cy.get('#data_pagamento').click().type("08/05/2025");
    cy.get('#descricao').click().type("Conta de Agua");
    cy.get('#interessado').click().type("Copasa");
    cy.get('#valor').click().type("1500");
    cy.get('#conta').select(contaGerada);
    cy.get('#status_pago').click();
    cy.get('.btn').click();
    cy.wait(1000);
    cy.contains("Movimentação adicionada com sucesso!").should('be.visible');
    cy.wait(1000);
    cy.get(':nth-child(4) > a').click();
    cy.wait(1000);
    cy.get('#mes').select("Maio");
    cy.get('.btn');
    cy.contains("Conta de Agua").should('be.visible');
  });
 
    //Criacao e visuzalizacao de movimentacao Receita
    it("passes", () => {
      cy.visit("https://seubarriga.wcaquino.me/login");
      cy.get("#email").click().type("testeTray1@yopmail.com");
      cy.get("#senha").click().type("Teste123!");
      cy.get(".btn").click();
      cy.wait(1000);
      cy.get(':nth-child(3) > a').click();
      cy.wait(1000);
      cy.get('#tipo').select("Receita");
      cy.get('#data_transacao').click().type("01/04/2025");
      cy.get('#data_pagamento').click().type("15/04/2025");
      cy.get('#descricao').click().type("Aluguel");
      cy.get('#interessado').click().type("Seu Barriga");
      cy.get('#valor').click().type("1500");
      cy.get('#conta').select(contaGerada);
      cy.get('#status_pago').click();
      cy.get('.btn').click();
      cy.wait(1000);
      cy.contains("Movimentação adicionada com sucesso!").should('be.visible');cy.wait(1000);
      cy.get(':nth-child(4) > a').click();
      cy.wait(1000);
      cy.get('#mes').select("Abril");
      cy.get('.btn').click();
      cy.wait(1000);
      cy.contains("Aluguel").should('be.visible');
    }); 
});
