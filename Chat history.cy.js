describe('Chat History', ()=> {


    it('Functions', ()=> {

        cy.viewport(1920, 1080)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('[href="/login"]').click() //Sidebar login btn
        cy.get('#input-v-5').type('sextingai001@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(4000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success
        cy.wait(2000)

        //Chat History
        cy.get('[href="/chat-history"]').click() //Chat history page link
        cy.wait(2000)
        cy.get(':nth-child(1) > a > .v-row > .v-col-sm-3 > .profile > span').should('have.text', 'Testing') //AI parter name
        cy.wait(2000)
        cy.get('.chatlist-scroll > :nth-child(1)').click() //Select single chat
        cy.wait(1000)
        cy.get('.v-card-actions > .v-btn').click()
        cy.wait(1000)
        cy.get('.messagebox > .sender').should('have.text', "Testing") //Verify chat history display properly

    })
})