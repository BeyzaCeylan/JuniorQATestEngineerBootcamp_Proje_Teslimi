describe('Ücretsiz Kargo Şartları Testi', () => {
    it('100 TL üzeri alışverişte kargo bedava mesajı görünür', () => {
      // Sayfayı aç
      cy.visit('http://localhost:8080/free-shipping.html');
      
      // Ücretsiz kargo bilgilendirme mesajı kontrolü
      cy.contains('Ücretsiz kargo 100 TL ve üzeri alışverişlerde geçerlidir').should('be.visible');
  
      // Sepete ekle
      cy.get('#addToCart').click();
  
      // Sepet görünür mü?
      cy.get('#cart').should('be.visible');
  
      // Sepeti yenile (adet artır)
      cy.get('#refreshCart').click();
      cy.get('#refreshCart').click(); // 2 kez basılırsa 150 TL olur
  
      // Adet 3 oldu mu?
      cy.get('#quantity').should('contain', '3');
  
      // Toplam 150 TL oldu mu?
      cy.get('#total').should('contain', '150');
  
      // "Kargo Bedava!" mesajı görünür mü?
      cy.get('#shippingMessage').should('contain', 'Kargo Bedava!');
    });
  });
  