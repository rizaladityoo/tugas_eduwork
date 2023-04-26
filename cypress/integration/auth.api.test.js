describe("POST /login", () => {
    it("login as admin", () => {
      cy.loginViaAPI("jdoe", "password123").then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })