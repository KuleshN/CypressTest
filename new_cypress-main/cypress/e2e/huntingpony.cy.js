describe ('Testing order', function() {
    it('Positive case', function(){
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(4000);
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.contains('В корзине 2 шт').should('be.visible');
        cy.wait(3000);
        cy.get('.header__cart > .icon').click();
        cy.wait(3000);
        cy.get('.cart-controls > .button').click();
        cy.wait(3000);
        cy.get('.decorated-title').contains('Оформление заказа').should('be.visible');
    
    })
    it('Second positive case', function(){
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="4"] > .header__collections-controls > .header__collections-link').click();
        cy.wait(3000);
        cy.get('[data-product-id="353759308"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn-label').click();
        cy.wait(2000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(4000);
        cy.contains('В корзине 2 шт').should('be.visible');
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.get('.decorated-title').contains('Оформление заказа').should('be.visible');
        

    })
})