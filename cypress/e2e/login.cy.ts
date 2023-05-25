 describe("Login page", () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/auth/login');
    })

    context("Links section", () => {
      it("Should have correct text", () => {
        cy.getByData("container-btn").find("span").contains("Nie masz konta?")
        cy.getByData("container-btn").find("span > a").contains("Zarejestruj się").click()
        cy.location("pathname").should("eq", "/auth/register")
        cy.visit("http://localhost:3000/auth/register")
      })
      it.only("should go to forgot password page", () => {
        cy.getByData("container-btn-forgot").find("a").contains("Zapomniałeś hasła?").click()
        cy.visit("http://localhost:3000/auth/forgotPassword")
      })
    })

    context("Form section", () => {
      it("Should can insert text to inputs", () => {
        cy.getByData("input-mail").find('input[placeholder="E-mail"]').type("domena@email.com")
        cy.getByData("input-password").find('input[placeholder="Hasło"]').type("Hasło")
        cy.get('button').click()
      })
    })

    context("Image section", () => {
      it("should be image on page", () => {
        cy.getByData("logo").should("exist")
      })
    })
  })