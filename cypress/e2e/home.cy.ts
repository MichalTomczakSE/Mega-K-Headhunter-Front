describe('Home page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })

    context("Main section", () => {
      it("button should exist and contain correct text", () => {
        cy.getByData("main-page-link").find("button").contains("Zaloguj się").click()
        cy.location("pathname").should("equal", "/auth/login")
      })
    })

    context("Image section", () => {
      it("should be image on page", () => {
        cy.getByData("logo").should("exist")
      })
    })
  })