import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiMjU5NDA1M2UtNTkwNi00YTY5LThlM2MtNTkwZDA5NGFhMGZkIiwianRpIjoiMGRmZGYzZGQtOTE3Yy00ZDQ2LTk2YmUtZGE3MTEwOTAwZjA4IiwiaWF0IjoxNzY1MTYzMDE2LCJleHAiOjE3NjUxNjU3MTZ9.OZjWYugBZDm-w8QlTkplBWvFcoxHNP4hXtH6cEQ-o4g`
      }
    }
  }
);

const books = [
  {
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '2594053e-5906-4a69-8e3c-590d094aa0fd',
    title: "Lassoed in Love",
    cover: "/books/lassoed-in-love.webp",
    description: "Amanda is a woman who spends her days working on her family's ranch. She loves her life but something has been missing for the last couple of years—love. She had been on a few dates but there was never any spark. Amanda wanted something real but, in a town this small, she was beginning to wonder if she would ever find it. But everything changes...",
    genre: "Contemporary Romance",
    published: "2024",
    pages: 328,
    rating: 4.9,
    price: 14.99
  },
  {
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '2594053e-5906-4a69-8e3c-590d094aa0fd',
    title: "Crossfire Hearts",
    cover: "/books/crossfire-hearts.webp",
    description: "Two rival bike clubs are at war, but when the president's daughter Raven falls for the rival president's son Jackson, their forbidden love changes everything. In a world of loyalty and danger, can love survive when families are enemies?",
    genre: "MC Romance",
    published: "2024",
    pages: 356,
    rating: 4.8,
    price: 15.99
  },
  {
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '2594053e-5906-4a69-8e3c-590d094aa0fd',
    title: "Chrome and Blood",
    cover: "/books/chrome-and-blood.webp",
    description: "A biker is murdered in front of his biker club and the cops won't help because to them he is just another outlaw biker. So his best friend Gunner opens his own investigation into the murder, and what he finds turns the club upside down. A gripping thriller about loyalty, justice, and the bonds of brotherhood.",
    genre: "MC Thriller Mystery",
    published: "2024",
    pages: 389,
    rating: 4.9,
    price: 16.99
  },
  {
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '2594053e-5906-4a69-8e3c-590d094aa0fd',
    title: "Whisky and Wild Hearts",
    cover: "/books/whisky-and-wild-hearts.webp",
    description: "The story of a bartender named Roxy who falls in love with a biker named Brantley. In a world where passion meets danger, Roxy discovers that sometimes the wildest hearts beat the truest. A tale of love, loyalty, and finding home in the most unexpected places.",
    genre: "MC Romance",
    published: "2024",
    pages: 342,
    rating: 4.8,
    price: 14.99
  },
  {
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '2594053e-5906-4a69-8e3c-590d094aa0fd',
    title: "Her Best Friend's Husband",
    cover: "/books/her-best-friends-husband.webp",
    description: "Kandi goes to Texas to see her best friend Janie and ends up falling in love with her best friend's husband Cole. A story of forbidden desire, complicated emotions, and the consequences of following your heart when you know you shouldn't.",
    genre: "Contemporary Romance",
    published: "2024",
    pages: 312,
    rating: 4.7,
    price: 13.99
  }
];

async function seedBooks() {
  console.log('Seeding books...');

  const { data, error } = await supabase
    .from('books')
    .insert(books)
    .select();

  if (error) {
    console.error('Error seeding books:', error);
  } else {
    console.log('✅ Books seeded successfully:', data);
  }
}

seedBooks();
