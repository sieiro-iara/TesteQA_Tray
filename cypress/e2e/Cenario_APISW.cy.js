describe("Teste api SW", () => {
  const API_URL_FILMS = "https://swapi.dev/api/films/";
  const API_URL_PEOPLE = "https://swapi.dev/api/people/";

  it("Validar o formato da request json válido", () => {
    cy.request({
      method: "GET",
      url: "https://swapi.dev/api/films/?format=json",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers["content-type"]).to.include("application/json");
      expect(response.body.results).to.be.an("array").that.is.not.empty;
      const firstFilm = response.body.results[0];
      expect(firstFilm).to.include.all.keys(
        "title",
        "episode_id",
        "opening_crawl",
        "director",
        "producer",
        "release_date",
        "characters",
        "planets",
        "starships",
        "vehicles",
        "species",
        "created",
        "edited",
        "url"
      );
    });
  });

  it("Validar retornos para URLs inválidas", () => {
    cy.request({
      method: "GET",
      url: "https://swapi.dev/api/films/?format=jsonx",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.headers["content-type"]).to.include("application/json");
      expect(response.body).to.have.property("detail", "Not found");
    });
  });

  it("Pesquisa Filme 10 retornar erro e validação tipo de retorno", () => {
    cy.request({
      method: "GET",
      url: API_URL_FILMS + "10",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.headers["content-type"]).to.include("application/json");
      expect(response.body).to.have.property("detail", "Not found");
      expect(response.body).to.be.an("object");
    });
  });

  it("Pesquisa Filme 2 retornar sucesso e validação tipo de retorno", () => {
    cy.request({
      method: "GET",
      url: API_URL_FILMS + "2",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers["content-type"]).to.include("application/json");
      const result = response.body;
      expect(result).to.have.property("episode_id", 5);
      expect(response.body).to.be.an("object");
    });
  });

  it("Pesquisa Filme 5 retornar sucesso e validação de titulo", () => {
    cy.request({
      method: "GET",
      url: API_URL_FILMS + "5",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers["content-type"]).to.include("application/json");
      const result = response.body;
      expect(result).to.have.property("title", "Attack of the Clones");
    });
  });

  it("Pesquisa Filme 2 retornar sucesso e validação de id e tipo de dado", () => {
    cy.request({
      method: "GET",
      url: API_URL_FILMS + "2",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers["content-type"]).to.include("application/json");
      const result = response.body;
      expect(result).to.have.property("episode_id", 5).to.be.an("number");
    });
  });

  it("Pesquisa Filme e valida data padrao americano", () => {
    cy.request({
      method: "GET",
      url: API_URL_FILMS + "1",
    }).then((response) => {
      expect(response.status).to.equal(200);
      const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
      expect(response.body.release_date)
        .to.be.a("string")
        .and.to.match(dateRegex, "A data deve estar no formato YYYY-MM-DD");
    });
  });

  it("Valida personagem C-3PO", () => {
    cy.request({
      method: "GET",
      url: API_URL_PEOPLE + "2",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.height).equal("167");
      expect(response.body.mass).equal("75");
      expect(response.body.films).contains(
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/"
      );
    });
  });
});
