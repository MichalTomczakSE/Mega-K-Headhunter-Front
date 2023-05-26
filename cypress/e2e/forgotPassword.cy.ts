describe(" Page forgot password", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/forgotPassword")
  })
  context("Image section", () => {
    it("should be image on page", () => {
      cy.getByData("logo").should("exist")
    })
  })

  context("Form section", () => {
    it.only
    ("should allow me to add email and send", () => {
      cy.getByData("form").find("span").contains("Podaj email w celu rejestracji")
      cy.getByData("input-mail").find("input").should("exist").type("domena@test.com")
      cy.get('button').should("be.visible").contains("Wyślij").click()
    })
  })
})