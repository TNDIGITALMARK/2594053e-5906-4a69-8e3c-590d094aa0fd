import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Whispers in the Garden",
    cover: "/generated/whispers-garden.png",
    description:
      "A tale of forbidden love blooms in a mysterious Victorian garden where secrets lie buried beneath every rose. When landscape architect Emma discovers an old diary, she uncovers a century-old mystery that mirrors her own tangled heart.",
    genre: "Historical Romance Mystery",
    published: "2023",
    pages: 342,
    rating: "4.8/5",
  },
  {
    id: 2,
    title: "Crimson Secrets",
    cover: "/generated/crimson-secrets.png",
    description:
      "In a moonlit world of passion and danger, two souls discover that the greatest mysteries lie within the heart. Detective Isabella Monroe's investigation leads her to a stranger who knows more than he should—and makes her feel things she never thought possible.",
    genre: "Romantic Suspense",
    published: "2024",
    pages: 389,
    rating: "4.9/5",
  },
  {
    id: 3,
    title: "Shadows of Love",
    cover: "/generated/shadows-love.png",
    description:
      "A Gothic mansion holds the key to a family curse, and only love can break it. When inheritance lawyer Claire Anderson arrives at Thornwood Manor, she finds herself caught between past and present, duty and desire.",
    genre: "Gothic Romance Mystery",
    published: "2023",
    pages: 367,
    rating: "4.7/5",
  },
  {
    id: 4,
    title: "Enchanted Mystery Manor",
    cover: "/generated/enchanted-manor.png",
    description:
      "A Victorian manor with glowing windows beckons to those who dare to uncover its secrets. Historian Dr. Sarah Mitchell thought she'd write a book about the manor's history—she never expected to become part of it.",
    genre: "Paranormal Romance Mystery",
    published: "2022",
    pages: 401,
    rating: "4.6/5",
  },
  {
    id: 5,
    title: "The Hidden Fragments of the Heart",
    cover: "/generated/hidden-fragments.png",
    description:
      "Love can be as mysterious as any puzzle. Art restorer Olivia discovers that the masterpiece she's restoring contains hidden messages—messages that lead her to a man with secrets of his own and a passion that threatens to consume them both.",
    genre: "Contemporary Romance Mystery",
    published: "2023",
    pages: 356,
    rating: "4.8/5",
  },
  {
    id: 6,
    title: "Midnight Romance Secrets",
    cover: "/generated/midnight-romance.png",
    description:
      "In the shadows of the city, where film noir meets romance, a private investigator discovers that the most dangerous case is the one that involves her heart. Rachel Knight thought she could keep her professional life separate—until she met him.",
    genre: "Noir Romance Mystery",
    published: "2022",
    pages: 378,
    rating: "4.7/5",
  },
  {
    id: 7,
    title: "Love Letters from a Stranger",
    cover: "/generated/love-letters.png",
    description:
      "Anonymous love letters arrive at bookstore owner Lily's door, each one revealing intimate knowledge of her life and secrets she thought were buried forever. The mystery sender knows her past—but will learning his identity destroy her future?",
    genre: "Romantic Mystery",
    published: "2024",
    pages: 324,
    rating: "4.9/5",
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
                href="#contact"
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
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl text-center mb-4">Book Catalog</h1>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Explore Nicole Clark's complete collection of romantic mystery novels. Each story
              offers a unique blend of passion, intrigue, and unforgettable characters.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-12 text-center text-on-dark">
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
