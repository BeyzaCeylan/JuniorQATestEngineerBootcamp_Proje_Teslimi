describe('Fiyat Güncelleme Uyarı Sistemi Testi', () => {
    it('Fiyat güncellemesi doğru şekilde yansıtılır', () => {
      // HTML dosyasına git
      cy.visit('price-update-warning.html');
  
      // Sepete ekle butonuna tıkla
      cy.get('#addToCart').click();
  
      // Sepet görünür oldu mu?
      cy.get('#cart').should('be.visible');
  
      // İlk fiyat 150 mi?
      cy.get('#cartPrice').should('contain', '150');
  
      // Fiyatı backendden güncelle butonuna tıkla
      cy.get('#simulateBackend').click();
  
      // Yeni fiyat 180 olarak güncellendi mi?
      cy.get('#cartPrice').should('contain', '180');
    });
  });
  