// frontend/src/app/page.tsx

// 'use client' direktifi, bu component'in tarayıcıda çalışacağını belirtir
// (veri çekme ve state yönetimi için bu gereklidir)
'use client';

import { useState, useEffect } from 'react';

// Bir gönderinin (Post) yapısını tanımlayalım
// (Rails backend'imizden gelen 'title' ve 'content' alanları)
interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function Home() {
  // Gönderileri saklamak için bir state (durum) tanımlıyoruz
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect, component yüklendiğinde SADECE BİR KEZ çalışır
  useEffect(() => {
    // Backend API'mizden veri çekiyoruz
    // DİKKAT: Port 3001'den (Rails sunucumuz) veri çekiyoruz
    fetch('http://localhost:3001/api/v1/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data); // Gelen veriyi state'e kaydediyoruz
        setLoading(false); // Yüklemeyi bitiriyoruz
      })
      .catch((error) => {
        console.error("Backend'den veri çekerken hata:", error);
        setLoading(false);
      });
  }, []); // [] -> Bu efektin sadece bir kez çalışmasını sağlar

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  // Veri yüklendiğinde, gönderileri listeliyoruz
  return (
    <main>
      <h1>Gönderiler</h1>
      <div>
        {posts.map((post) => (
          // TESTİMİZİN ARADIĞI ELEMENT BUDUR!
          <div key={post.id} data-testid="post-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}