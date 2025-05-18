# 🧪 JuniorQATestEngineerBootcamp_Proje_Teslimi
## Junior QA Test Engineer Bootcamp – Proje Teslimi

Bu proje, QA Bootcamp kapsamında verilen 5 farklı test senaryosunun Cypress kullanılarak otomatikleştirilmesini içermektedir.  
Her test, gerçek hayattan senaryolar simüle edilerek HTML sayfalar üzerinde yürütülmüştür.  
Ayrıca Allure entegrasyonu ile detaylı test raporları da oluşturulmuştur.

---

## 📋 Proje İçeriği

### ✅ Cypress ile Otomasyon Testleri
1. 🛒 Sepet Ürün Adedi Güncelleme  
2. 💸 Fiyat Güncelleme Uyarısı  
3. 🏷️ Kampanyalı Ürün Fiyatı Kontrolü  
4. 🚚 Ücretsiz Kargo Şartları  
5. 🔑 Geçerli/Geçersiz İndirim Kodu Uygulama

### 📊 Raporlama
- Allure ile zengin raporlama entegrasyonu

### 🧾 Test Ortamı
- Yerel HTML test sayfaları (statik `.html` dosyaları)

---

## 🚀 Kurulum ve Çalıştırma

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/BeyzaCeylan/JuniorQATestEngineerBootcamp_Proje_Teslimi.git
cd JuniorQATestEngineerBootcamp_Proje_Teslimi
```

### 2. Gerekli Paketleri Kurun

```bash
npm install
```

### 3. Yerel Sunucuyu Başlatın

```bash
npx http-server .
```

Tarayıcınızda açmak için: `http://127.0.0.1:8080`

---

## 🧪 Testleri Çalıştırmak

```bash
npx cypress run --env allure=true
```

> Test sonuçları `allure-results/` klasörüne yazılır.

---

## 📊 Allure Raporu Oluşturmak

```bash
npx allure generate --clean
npx allure open
```

---

## 📄 Test Senaryoları

Tüm manuel test senaryoları, ayrı ayrı Excel dosyaları olarak `test-documents/` klasörü altında tutulmaktadır.

- `TestCase_HB_001`: Sepet ürün adedi güncelleme testi
- `TestCase_HB_002`: Fiyat güncelleme uyarısı testi
- `TestCase_HB_003`: Kampanyalı ürün fiyat kontrol testi
- `TestCase_HB_004`: Ücretsiz kargo koşulları testi
- `TestCase_HB_005`: Geçerli/geçersiz indirim kodu testi


## 📁 Dizin Yapısı

```
cypress/
├── e2e/
│   ├── campaign.cy.js
│   ├── discount-code.cy.js
│   ├── free-shipping.cy.js
│   ├── price-warning.cy.js
│   └── update-quantity.cy.js
├── support/
│   └── e2e.js

html test sayfaları:
├── index.html
├── price-warning.html
├── discount-code.html
├── free-shipping.html
...

allure-results/
allure-report/
package.json
cypress.config.js
```

---

## 👩‍💻 Katkıda Bulunan

- Beyza Ceylan  
- QA Bootcamp (Mayıs 2025)
