describe ('Testing autorization', function() {
    it('Positive case', function(){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(2000);

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Recovery password', function(){
          cy.visit('https://login.qa.studio/');
          cy.get('#forgotEmailButton').click();
          cy.get('#mailForgot').type('kulesh.nick@gmail.com');
          cy.get('#restoreEmailButton').click();
          cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
    it('Wrong password', function(){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('ABRAKadaBRA');
        cy.get('#loginButton').click();
        cy.wait(2000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
    it('Wrong login', function(){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ABRAKADABRA@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(2000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
    it('Wrong login without @', function(){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(2000);
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
    it('Positive case with UPPERCASE', function(){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(2000);

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

}) 