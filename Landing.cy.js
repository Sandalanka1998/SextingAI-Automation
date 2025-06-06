describe('Landing page', ()=> {

    it('Functions', ()=> {

        cy.viewport(1920, 1080)
        cy.visit("https://dev.sextingai.co/");
        cy.wait(2000)

        //Header//
        //Dashboard
        cy.get('[href="https://dev-app.sextingai.co"] > .btn').click() //Dashboard
        cy.wait(1000)
        cy.get('.v-card-text > .v-btn').click() //Age verification btn
        cy.wait(1000)
        cy.get(':nth-child(1) > .v-card').click() //Select character
        cy.wait(1000)
        cy.go('back');


        //Boyfriend AI
        cy.get(':nth-child(1) > .nav-link').click() //Boyfriend AI
        cy.wait(1000)
        cy.get('.row > :nth-child(1) > :nth-child(1) > .text-white').should('have.text', 'Meet Your AI Boyfriend') //Verify Page
        cy.wait(1000)

        cy.get(':nth-child(1) > .btn').click() //Login
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/') //Verify URL (Should be change URL)
        cy.go('back');
        cy.wait(1000)

        cy.get('.login > span').click() //Login
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/') //Verify URL (Should be change URL)
        cy.go('back');
        cy.wait(1000)

        //Girlfriend AI
        cy.get(':nth-child(2) > .nav-link').click() //Girlfriend AI
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .text-white').should('have.text', 'Chat with your new virtual Girlfriend.') //Verify Page
        cy.wait(1000)
        cy.get(':nth-child(1) > .btn').click() //Choose a character
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/') //Verify URL
        cy.go('back');

        cy.get('.login > span').click() //Built it custom
        cy.wait(1000)
        cy.go('back'); 

        //Anime Girlfriend AI
        cy.get(':nth-child(3) > .nav-link').click() //Anime Girlfriend AI
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .text-white').should('have.text', 'Chat with your new AI-powered waifu') //Verify Page
        cy.get(':nth-child(1) > .btn').click() //Choose a character
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/') //Verify URL
        cy.go('back');

        cy.get('.login > span').click() //Built it custom
        cy.wait(1000)
        cy.go('back'); 

        //Refferals
        cy.get(':nth-child(4) > .nav-link').click() //Refferals
        cy.wait(1000)
        cy.get('.text-white.mb-4').should('have.text', 'Earn up to 35% commission on your referrals') //Verify Page
        cy.wait(1000)
        cy.get('.col-12 > a > .btn').click() //Start Earning Now
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/subscribe') //Verify URL
        cy.wait(1000)
        cy.visit("https://dev.sextingai.co/");
        
        //Blog
        cy.get(':nth-child(5) > .nav-link').click() //Blog
        cy.wait(1000)
        cy.url().should('include', 'https://dev.sextingai.co/blog') //Verify URL
        //cy.get(':nth-child(1) > .card > .card-body > .btn').click() //Read more
        //cy.wait(1000)
        cy.go('back');
        cy.wait(1000) 

        //Try our AI for free//
        cy.get('.mt-5 > [href="https://dev-app.sextingai.co/signup"] > .btn').click() //Try our AI for free
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/signup') //Verify URL
        cy.go('back');
        cy.wait(1000)

        //Login//
        cy.get('.login > span').click() //Login
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/login') //Verify URL 
        cy.go('back');
        cy.wait(1000)

        //Try our AI for free//
        cy.get('.text-center > a > .btn').click() //Try our AI for free
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/signup') //Verify URL
        cy.go('back');
        cy.wait(1000)

        //Get Started//
        cy.get('.card-body > .btn').click() //Get Started
        cy.wait(1000)
        cy.url().should('include', 'https://dev-app.sextingai.co/signup') //Verify URL
        cy.go('back');
        cy.wait(1000)
 

        //Footer//
        //Blog
        cy.get(':nth-child(2) > .list-unstyled > .mb-2 > .text-decoration-none').click() //Blog
        cy.wait(1000)
        cy.url().should('include', 'https://dev.sextingai.co/blog') //Verify URL
        //cy.get(':nth-child(1) > .card > .card-body > .btn').click() //Read more
        //cy.wait(1000)
        cy.go('back');
        cy.wait(1000) 

        //Terms of service
        cy.get(':nth-child(3) > .list-unstyled > :nth-child(1) > .text-decoration-none').click() //Terms of service
        cy.wait(1000)
        cy.get('h1').should('have.text', 'Terms of Service') //Verify URL
        cy.wait(1000)
        cy.go('back');
        cy.wait(1000)

        //Privacy policy
        cy.get('.list-unstyled > :nth-child(2) > .text-decoration-none').click() //Privacy policy
        cy.wait(1000)
        cy.get('h1').should('have.text', 'Privacy Policy') //Verify URL
        cy.wait(1000)
        cy.go('back');
        cy.wait(1000)

        //NSFW.tools
        cy.get('.d-flex > .mb-2').click() //NSFW.tools
        cy.wait(1000)
        //cy.url().should('include', 'https://nsfw.tools/') //Verify URL
        //cy.wait(1000)
        //cy.get(':nth-child(1)>.agp__buttonType__button').click()
        cy.go('back');
        cy.wait(1000)

        //Creati.ai
        /*cy.get('[href="https://creati.ai"]').click() //Creati.ai
        cy.wait(1000)
        cy.go('back');
        cy.wait(1000)*/


        
    })

})