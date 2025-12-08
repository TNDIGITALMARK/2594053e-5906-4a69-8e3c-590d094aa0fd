"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { books } from "@/data/books";
import { useCart } from "@/contexts/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { CartButton } from "@/components/cart-button";

export default function BooksPage() {
  const { addToCart } = useCart();
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

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ${book.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => addToCart(book)}
                      className="flex-1 btn-gradient text-center inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    {book.id === 5 && (
                      <Link
                        href="/books/her-best-friends-husband"
                        className="px-4 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all text-sm"
                      >
                        Details
                      </Link>
                    )}
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

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Floating Cart Button */}
      <CartButton />
    </div>
  );
}
