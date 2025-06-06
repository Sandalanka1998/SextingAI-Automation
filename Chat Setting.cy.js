describe('Chat Setting', ()=> {


    it('Functions', ()=> {


        cy.viewport(1920, 1080)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('[href="/login"]').click() //Sidebar login btn
        cy.get('#input-v-5').type('sextingai005@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(4000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success

        
        //Chat Setting//
        cy.get('[href="/chat-settings"]').click() //Chat setting page
        cy.wait(2000)

        //About Yourself//
        cy.get('#input-v-18').clear().type('Test Name') //What's your name?
        cy.wait(2000)
        cy.get('#input-v-20').clear().type('25') //Age
        cy.wait(2000)

        //Waht are you kinks
        cy.get('.v-form > .v-row > :nth-child(1) > .v-card').click()
        cy.get('.v-form > .v-row > :nth-child(2) > .v-card').click() 
        cy.get('.v-form > .v-row > :nth-child(3) > .v-card').click() 
        cy.get('.v-form > .v-row > :nth-child(4) > .v-card').click() 
        cy.get('.v-form > .v-row > :nth-child(5) > .v-card').click()
        cy.wait(2000)
        cy.get('.v-col-md-8 > .default-card > .v-card-actions > .v-btn').click() //Save btn
        cy.wait(2000)
        
        //About Your Partner//
        //Messaging Style
        cy.get(':nth-child(1) > .v-label > .d-flex > .me-2').click() //Short & Slutty
        cy.wait(1000)
        cy.get(':nth-child(2) > .v-label > .d-flex > .me-2').click() //Descriptive Scenarios
        cy.wait(1000)
        cy.get(':nth-child(3) > .v-label > .d-flex > .me-2').click() //Romantic
        cy.wait(1000)

        //Personality
        cy.get('.v-card-text > .v-row > :nth-child(1) > .v-card').click() //Calm
        cy.get('.v-card-text > .v-row > :nth-child(2) > .v-card').click() //Kind
        cy.get('.v-card-text > .v-row > :nth-child(3) > .v-card').click() //Shy
        cy.get('.v-card-text > .v-row > :nth-child(4) > .v-card').click() //Mean
        cy.get('.v-card-text > .v-row > :nth-child(5) > .v-card').click() //Aggresive
        cy.wait(2000)
        cy.get(':nth-child(2)>.v-card>:nth-child(4)>.v-btn').click() //Save btn

       


    })
})