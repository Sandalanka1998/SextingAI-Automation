describe('Login', ()=> {


    it('Functions', ()=> {


        cy.viewport(412, 915)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar
        cy.get('[href="/login"]').click() //Sidebar login btn
        cy.get('#input-v-5').type('sextingai001@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(5000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success
        cy.wait(2000)
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar open btn
        cy.wait(1000)
        cy.get('.v-list > :nth-child(9)').click()//Logout
        cy.wait(1000)
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar open btn
        cy.get('[href="/login"]').click() //Sidebar login btn
        cy.wait(2000)

        //Signup with existing user
        cy.get('.text-primary').click() //Signup btn
        cy.wait(2000)
        cy.get('#input-v-10').type('sextingai001@yopmail.com') //Email
        cy.get('#input-v-12').type('Testing') //Password
        cy.get('#input-v-14').type('Testing') //Confirm password
        cy.get('.mdi-menu-down').click() //language
        cy.wait(2000)
        cy.get('.v-list>:nth-child(3)').click() //Select language  
        

    
       
           
    })

})