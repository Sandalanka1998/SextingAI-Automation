describe('Login Automation', ()=> {


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
        cy.wait(2000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success

        cy.get('.v-list > :nth-child(9)').click()//Logout
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