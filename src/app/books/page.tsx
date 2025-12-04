import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Lassoed in Love",
    cover: "/books/lassoed-in-love.webp",
    description:
      "Amanda is a woman who spends her days working on her family's ranch. She loves her life but something has been missing for the last couple of years—love. She had been on a few dates but there was never any spark. Amanda wanted something real but, in a town this small, she was beginning to wonder if she would ever find it. But everything changes...",
    genre: "Contemporary Romance",
    published: "2024",
    pages: 328,
    rating: "4.9/5",
  },
  {
    id: 2,
    title: "Crossfire Hearts",
    cover: "/books/crossfire-hearts.webp",
    description:
      "Two rival bike clubs are at war, but when the president's daughter Raven falls for the rival president's son Jackson, their forbidden love changes everything. In a world of loyalty and danger, can love survive when families are enemies?",
    genre: "MC Romance",
    published: "2024",
    pages: 356,
    rating: "4.8/5",
  },
  {
    id: 3,
    title: "Chrome and Blood",
    cover: "/books/chrome-and-blood.webp",
    description:
      "A biker is murdered in front of his biker club and the cops won't help because to them he is just another outlaw biker. So his best friend Gunner opens his own investigation into the murder, and what he finds turns the club upside down. A gripping thriller about loyalty, justice, and the bonds of brotherhood.",
    genre: "MC Thriller Mystery",
    published: "2024",
    pages: 389,
    rating: "4.9/5",
  },
  {
    id: 4,
    title: "Whisky and Wild Hearts",
    cover: "/books/whisky-and-wild-hearts.webp",
    description:
      "The story of a bartender named Roxy who falls in love with a biker named Brantley. In a world where passion meets danger, Roxy discovers that sometimes the wildest hearts beat the truest. A tale of love, loyalty, and finding home in the most unexpected places.",
    genre: "MC Romance",
    published: "2024",
    pages: 342,
    rating: "4.8/5",
  },
  {
    id: 5,
    title: "Her Best Friend's Husband",
    cover: "/generated/bestfriends-husband.png",
    description:
      "Kandi goes to Texas to see her best friend Janie and ends up falling in love with her best friend's husband Cole. A story of forbidden desire, complicated emotions, and the consequences of following your heart when you know you shouldn't.",
    genre: "Contemporary Romance",
    published: "2024",
    pages: 312,
    rating: "4.7/5",
  },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl text-primary hover:text-secondary transition-colors">
                Love and Mystery by Nicole Clark
              </h1>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wider"
              >
                Home
              </Link>
              <Link
                href="/books"
                className="text-sm font-medium text-secondary transition-colors uppercase tracking-wider"
              >
                Books
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wider"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wider"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">Book Catalog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore Nicole Clark's complete collection of romantic mystery novels. Each story
              offers a unique blend of passion, intrigue, and unforgettable characters.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[2/3] book-cover overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{book.published}</span>
                    <span>•</span>
                    <span>{book.pages} pages</span>
                    <span>•</span>
                    <span className="text-primary font-medium">{book.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-4">
                    {book.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-medium">
                      {book.genre}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-gradient text-center inline-flex items-center justify-center gap-2 py-2 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Buy Now</span>
                    </a>
                    <button className="px-4 py-2 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all text-sm">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 text-center text-on-dark max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">
              Can't Decide Which Book to Start With?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Sign up for our newsletter and receive a free reading guide that will help you
              choose your next romantic mystery adventure!
            </p>
            <a
              href="/#newsletter"
              className="inline-block px-8 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-all"
            >
              Get Your Free Guide
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-on-dark">
            <h3 className="text-2xl mb-4">Love and Mystery by Nicole Clark</h3>
            <p className="mb-6">
              Where romance meets mystery in unforgettable stories
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:contact@nicoleclark.com"
                className="text-light-muted hover:text-white transition-colors"
              >
                Email
              </a>
              <span className="text-light-subtle">•</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span className="text-light-subtle">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
            <p className="text-light-subtle text-sm">
              © 2024 Nicole Clark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
