/// <reference types="Cypress" />

context("Trousers", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.military1st.co.uk/k05007-2-0-06rg-pentagon-ranger-2-0-pants-ranger-green.html"
    );
    cy.on("uncaught:exception", (err, runnable) => {
      // expect(err.message).to.include("something about the error");

      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      done();

      // return false to prevent the error from
      // failing this test
      return false;
    });
  });
  before(() => {
    cy.exec(`notify-send "Cypess" "Searching for trousers"`);
  });

  // https://on.cypress.io/interacting-with-elements

  it("it should find a 34x32", () => {
    const sizeToFind = 'W 44", L 34"';

    cy.get(".super-attribute-select").select(sizeToFind);
    cy.exec(`notify-send ${sizeToFind}`);
  });
  it("itshould find a 36x32", () => {
    const sizeToFind = 'W 36", L 32"';

    cy.get(".super-attribute-select").select(sizeToFind);
    cy.exec(`notify-send ${sizeToFind}`);
  });
});
