describe('İndirim Kodu Uygulama ve Geçersiz Kod Durumu', () => {
    it('Geçerli ve geçersiz indirim kodu test edilir', () => {
      // Sayfayı aç
      cy.visit('http://localhost:8080/discount-code.html');
  
      // Sepete Ekle
      cy.get('#addToCart').click();
  
      // Sepet görünür mü?
      cy.get('#cart').should('be.visible');
  
      // Kupon kodu alanını göster
      cy.get('#showCoupon').click();
  
      // Geçerli kupon kodu gir
      cy.get('#couponInput').type('INDIRIM10');
      cy.get('#applyCoupon').click();
  
      // İndirim başarıyla uygulandı mı?
      cy.get('#total').should('contain', '40');
      cy.get('#couponResult').should('contain', '10 TL indirim uygulandı!');
  
      // Geçersiz kupon kodunu dene
      cy.get('#couponInput').clear().type('HATALIKOD');
      cy.get('#applyCoupon').click();
  
      // Geçersiz kod uyarısı çıktı mı?
      cy.get('#couponResult').should('contain', 'Bu indirim kodu geçersiz');
    });
  });
  