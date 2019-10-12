describe('sample test ',()=>{
    it ('do not thing ',()=>{
            expect(true).to.equal(true)
    })
    it ('vissit example website',()=>{      
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include','https://example.cypress.io/commands/actions')
        
     cy.get('.action-email')
     .type('fake@gmail.com')
     .should('have.value','fake@gmail.com')

     cy.get('.action-form')
     .submit()
     .next().should('contain','Your form has been submitted!')





     })



})
 