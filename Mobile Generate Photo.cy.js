describe('Generate photo', ()=> {


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
        cy.get('#input-v-5').type('sextingai005@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(6000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success

        //Generate Photo//
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar btn
        cy.wait(1000)
        cy.get('[href="/generate-photo"]').click() //Generate photo page
        cy.wait(2000)

        //Sex
        cy.get(':nth-child(1) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)

        //Age
        cy.get('.v-expansion-panel--after-active > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-slider__container').click()
        cy.wait(1000)

        //Ethnicity
        cy.get('.v-expansion-panel--after-active > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)


        //Body part
        cy.get(':nth-child(4) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)


        //Hair color
        cy.get(':nth-child(5) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)

        //Eyes color
        cy.get(':nth-child(6) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)


        //Breast size
        cy.get(':nth-child(7) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)

        //Ass size
        cy.get(':nth-child(8) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(1000)


        //Background
        cy.get(':nth-child(9) > .v-expansion-panel-title > .v-expansion-panel-title__overlay').click()
        cy.wait(1000)
        cy.get('.v-field__input').click()
        cy.wait(1000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content > .v-list > :nth-child(2),(3),(4),(5)...")
        cy.wait(2000)

        cy.get('.v-slide-group__content > [tabindex="-1"]').click() 
        cy.wait(1000)
        cy.get('#input-v-63').type("Indian Girl")
        cy.wait(2000)
        cy.get(':nth-child(3) > .v-btn').click() //Generate btn
        cy.wait(12000)
        cy.get('.pa-4 > .v-row > :nth-child(1) > .v-card > .v-responsive').should('be.visible') //Verify photo generated




    })
})