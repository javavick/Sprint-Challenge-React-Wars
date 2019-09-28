describe("My First Test", function() {
  it("Finds the content 'Luke Skywalker'", function() {
    cy.visit("localhost:3000/");
    cy.contains("Luke Skywalker");
  });
});
