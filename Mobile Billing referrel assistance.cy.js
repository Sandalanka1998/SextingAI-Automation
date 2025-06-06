describe('Billing Referrel Assistance', ()=> {


    it.skip('Functions', ()=> {


        cy.viewport(412, 915)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.get('[href="/login"]').click() //Sidebar login btn
        cy.get('#input-v-5').type('sextingai005@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(6000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success
        cy.wait(2000)

        //Billing
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.get('[href="/billing"]').click() //Billing page link
        cy.get('.text-h4').should('have.text', 'Your Subscription') //Verify billing page (Only Subscribed user can access this page)
        cy.wait(2000)

        //Referrel
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.get('[href="/referrals"]').click() //Referrel page link
        cy.get('.mb-4 > .v-card-title').should('have.text', 'Your Referral Stats') //Verify referrel page (Only Subscribed user can access this page)

        //Assistance
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.get('.v-list > :nth-child(8)').click() //Assistance link
        cy.get('.v-overlay__content > .v-card > .v-card-title').should('have.text', 'Get in touch with us') //Verify referrel page popup
        cy.wait(1000)
        cy.get('.v-card-actions > .v-btn').click() //Close popup
        cy.wait(2000)

        //Logout - Verify that the subscription link is displayed in the sidebar//
        
        cy.get('.v-list > :nth-child(9)').click() //Logout btn
        cy.wait(4000)
        cy.get('[href="/subscribe"]').should("have.text", 'Subscribe') //Verify that the subscription link is displayed in the sidebar
        cy.wait(1000)


    })


    it('Functions', ()=> {


        cy.viewport(412, 915)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.get('[href="/login"]').click() //Sidebar login btn
        cy.get('#input-v-5').type('sextingai011@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(6000)
        
        //Subscribe
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.get('[href="/subscribe"]').click() //Subscribe page link
        cy.get('.title').should('have.text', ' Fullfill your fantasies with ') //Verify subscribe page (Only Unsubscribed user can access this page)
        cy.wait(2000)

        cy.get('.v-col-md-12 > :nth-child(1) > .d-flex').click() //One Month Access
        cy.wait(1000)
        cy.get(':nth-child(3) > .d-flex').click() //Lifetime Access
        cy.wait(1000)
        cy.get(':nth-child(2) > .d-flex').click() //1 Year Access
        cy.wait(2000)

        //cy.get('.v-col-md-12 > .v-btn').click() //Pay btn
        //cy.wait(2000)
        //cy.get('.v-card-actions > .v-btn').click() //Next btn


    })

})