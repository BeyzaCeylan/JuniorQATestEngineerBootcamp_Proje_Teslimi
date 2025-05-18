describe('Sepet Ürün Adedi Güncelleme (Yerel Test Sayfası)', () => {
  it('Ürün sepete eklenir ve adet arttırılır', () => {
    cy.visit('index.html');

    // Sepete Ekle butonuna tıkla
    cy.get('#addToCart').click();

    // Sepet görünür olmalı
    cy.get('#cart').should('be.visible');

    // Adet varsayılan 1 olmalı
    cy.get('#quantity').should('contain', '1');

    // Arttır butonuna tıkla
    cy.get('#increase').click();

    // Adet 2 olmalı
    cy.get('#quantity').should('contain', '2');

    // Toplam fiyat 200 TL olmalı
    cy.get('#total').should('contain', '200');
  });
});
