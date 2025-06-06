describe('Dashboard', ()=> {


    it('Create Character', ()=> {

        cy.viewport(412, 915)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar login btn
        cy.get('[href="/login"]').click() //
        cy.get('#input-v-5').type('sextingai005@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn 
        cy.wait(5000)
        cy.get('.v-container > :nth-child(1)').should('have.text', ' Your Private AI Characters ') //Verify login success

        //Create Chracter
        cy.get('.btn-container-top > .v-btn').click() //Create character btn
        cy.get('.v-row > :nth-child(1) > .v-card').click() //Choose Type (cy.get(':nth-child(2) > .v-card'),(3),(4))
        cy.get('.v-card-actions > .v-btn').click() //Next btn

        //Basic Information
        cy.get('#input-v-26').type('Cypress') //Character name
        cy.get(':nth-child(2) > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Age
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)")
        cy.wait(2000)
        cy.get('.v-select--selection-slot > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Nationality
        cy.wait(2000)   
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)...")
        cy.get('.text-primary').click() //Next btn
        cy.wait(2000)

        //Body Type
        cy.get('.v-window-item--active > .v-row > .v-col-sm-8 > :nth-child(1) > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Breast Size
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)")

        cy.get('.v-window-item--active > .v-row > .v-col-sm-8 > :nth-child(2) > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Butt size
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)")

        cy.get('.v-window-item--active > .v-row > .v-col-sm-8 > :nth-child(3) > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Dress Style
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)...")

        cy.get('.text-primary').click() //Next btn
        cy.wait(2000)

        //Appearance
        cy.get('.v-window-item--active > .v-row > .v-col-sm-8 > :nth-child(1) > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Hair Color
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)...")

        cy.get('.v-window-item--active > .v-row > .v-col-sm-8 > :nth-child(2) > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Eye Color
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)...")

        cy.wait(2000)
        cy.get('.text-primary').click() //Next btn

        //Personality
        cy.get('.v-window-item--active > .v-row > .v-col-sm-8 > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Personal type
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)...")

        cy.wait(2000)
        cy.get('.text-primary').click() //Next btn
        cy.wait(2000)
        
        //Voice
        cy.get('#input-v-53').clear().type('Hello how are you') //Voice description
        cy.wait(2000)
        cy.get('.v-row > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input').click() //Select a voice
        cy.wait(2000)
        cy.get('.v-overlay__content>.v-list>:nth-child(2)').click() //Select (".v-overlay__content>.v-list>:nth-child(2),(3),(4),(5)...")
        cy.get('.v-row > .v-btn').click() //Play Voice btn
        cy.wait(5000)

        cy.get('.text-primary').click() //Next btn

        //Description
        cy.get('#input-v-59').type('Testing Character') //Character description
        cy.wait(2000)
        cy.get('.text-primary').click() //Create btn
        

        cy.wait(12000)
        cy.get('.v-card-title').should('have.text', 'Safety Advice') //Verify character created
        cy.wait(2000)
        cy.get('.v-card-actions > .v-btn').click() //Ok btn

        //Chat AI Partner
        cy.get('input').type('Hello') //Type message
        cy.wait(2000)
        cy.get('.message-input > :nth-child(3)').click() //Send message btn
        cy.wait(2000)
        cy.get('.mdi-volume-high').click() //Play voice btn

        cy.wait(2000)
        cy.get('.mdi-information-outline').click() //Character info btn
        cy.wait(1000)
        cy.get('.v-navigation-drawer__content > .girl-infobox > .v-row > .v-col > .v-slide-group > .v-slide-group__container > .v-slide-group__content > [tabindex="-1"]').click() //Pictures
        cy.wait(3000)
        cy.get('.v-navigation-drawer__content > .girl-infobox > :nth-child(1) > :nth-child(1) > .v-window > .v-window__container > .v-window-item--active > .v-row > :nth-child(1)').should('be.visible') //Verify pictures display properly
        cy.get('.v-navigation-drawer__content > .girl-infobox > :nth-child(1) > :nth-child(1) > .v-window > .v-window__container > .v-window-item--active > .v-row > :nth-child(2)').should('be.visible') //Verify pictures display properly
        cy.get('.v-navigation-drawer__content > .girl-infobox > :nth-child(1) > :nth-child(1) > .v-window > .v-window__container > .v-window-item--active > .v-row > :nth-child(3)').should('be.visible') //Verify pictures display properly
        cy.wait(2000)
    })


    it('Chat Function', ()=> {

        cy.viewport(412, 915)
        cy.visit("https://dev-app.sextingai.co/")

        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(2000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(2000)

        //login
        cy.get('.v-toolbar__content > .v-btn').click() //Sidebar login btn
        cy.get('[href="/login"]').click()
        cy.get('#input-v-5').type('sextingai005@yopmail.com') //Email
        cy.get('#input-v-7').type('Testing') //Password
        cy.wait(2000)
        cy.get('.bg-primary').click() //Login btn
        cy.wait(6000)

        //Chat AI Partner 
        cy.get(':nth-child(1) > .v-lazy > .v-card > .v-responsive > .v-responsive__content').click() //Click on character
        cy.get('.v-card-actions > .v-btn').click() //Ok btn
        cy.wait(2000)
        cy.get('input').type('Hello') //Type message 
        cy.wait(2000)
        cy.get('.message-input > :nth-child(3)').click() //Send message btn
        cy.wait(3000)

        cy.get(':nth-child(3) > .v-col > .messagebox-container > .messagebox').should('be.visible');
        cy.wait(2000)
        cy.get('.mdi-information-outline').click() //Character info btn
        cy.wait(1000)
        cy.get('.v-window__container > .text-primary > .v-btn__content').click() //Delete chat and restart
        cy.wait(2000)
        //cy.get(':nth-child(3) > .v-col > .messagebox-container > .messagebox').should('not.be.visible'); 
        //cy.wait(2000) 

        //cy.get('.v-window__container > .text-error > .v-btn__content').click() //Delete Character 





    })
})