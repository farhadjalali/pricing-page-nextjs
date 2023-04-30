describe("Pricing page", () => {
  beforeEach(() => {
    cy.visit("/pricing");
  });

  it("displays the correct pricing plan information", () => {
    cy.contains("h1", "Pricing");

    cy.fixture("pricing").then(({ plans }) => {
      plans.forEach((name: string) => {
        cy.contains("h3", name);
      });
    });
  });

  it("displays the correct compare features information", () => {
    cy.contains("h2", "Compare Features");

    cy.contains("Manual Bot").should("not.be.visible");
    cy.contains("Bot Types").click();
    cy.contains("Manual Bot").should("be.visible");
  });
});
