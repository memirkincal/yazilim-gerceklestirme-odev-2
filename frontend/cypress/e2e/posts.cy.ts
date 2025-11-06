// cypress/e2e/posts.cy.ts

describe('Gönderi Listesi (Post List)', () => {

  // Bu, tahtadaki 2. Adım: Test et (KIRMIZI)
  it('Kullanıcı ana sayfayı ziyaret ettiğinde gönderileri görmelidir (KIRMIZI TEST)', () => {
    
    // Testimiz, Next.js uygulamamızın ana sayfasına gidecek.
    // (Henüz uygulamayı çalıştırmadık, çalıştırınca bu adres 'http://localhost:3000' olacak)
    cy.visit('http://localhost:3000');
    
    // Bu testin asıl amacı:
    // Sayfada 'data-testid' özelliği 'post-item' olan bir element aramaktır.
    // Henüz böyle bir kod yazmadığımız için bu test %100 BAŞARISIZ olacak.
    cy.get('[data-testid="post-item"]').should('exist');
  });

});