context("Home section", () => {

  describe('home page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })

    context("Main section", () => {
      it("button should exist", () => {
        cy.get("button").click()
        cy.location("pathname").should("equal", "/auth/login")
      })

      it("button contains correct text", () => {
        cy.get("button").contains("Zaloguj się")
      })
    })

  })
})