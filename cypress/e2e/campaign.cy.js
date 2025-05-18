describe('Kampanyalı Ürün Fiyat Kontrol Testi', () => {
    it('Kampanya fiyatı tüm adımlarda doğru görüntülenir', () => {
      // 1. Sayfaya git
      cy.visit('/campaign.html');
  
      // 2. Kampanya fiyatı ve üstü çizili normal fiyat görünür olmalı
      cy.get('.strike').should('contain', '300');
      cy.get('#discountPrice').should('contain', '200');
  
      // 3. Sepete ekle
      cy.get('#addToCart').click();
  
      // 4. Sepet görünür olmalı
      cy.get('#cart').should('be.visible');
  
      // 5. Adet kontrolü ve fiyat
      cy.get('#quantity').should('contain', '1');
      cy.get('#total').should('contain', '200');
  
      // 6. Adet artır
      cy.get('#increase').click();
      cy.get('#quantity').should('contain', '2');
      cy.get('#total').should('contain', '400');
  
      // 7. Sepeti onayla butonu görünmeli
      cy.get('#checkout').should('be.visible');
    });
  });
  