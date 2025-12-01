import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function HomePage() {
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
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wider"
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

      {/* Hero Section with Featured Books */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-16">
            {/* Featured Books Showcase */}
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="relative aspect-[2/3] book-cover overflow-hidden transform md:translate-y-8">
                  <Image
                    src="/generated/whispers-garden.png"
                    alt="Whispers in the Garden"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[2/3] book-cover overflow-hidden transform scale-110 z-10">
                  <Image
                    src="/generated/crimson-secrets.png"
                    alt="Crimson Secrets"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[2/3] book-cover overflow-hidden transform md:translate-y-8 col-span-2 md:col-span-1 mx-auto w-1/2 md:w-full">
                  <Image
                    src="/generated/shadows-love.png"
                    alt="Shadows of Love"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Author Introduction */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-6">
                Welcome to a World of Romance and Mystery
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Step into the enchanting worlds created by Nicole Clark, where love and mystery
                intertwine in captivating tales. With 6-7 published novels, Nicole weaves stories
                of passion, secrets, and intrigue that will keep you turning pages late into the night.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/books" className="btn-gradient inline-block">
                  Explore All Books
                </Link>
                <a
                  href="#newsletter"
                  className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                >
                  Join Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Latest Release</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative aspect-[2/3] book-cover overflow-hidden max-w-sm mx-auto">
                <Image
                  src="/generated/crimson-secrets.png"
                  alt="Crimson Secrets - Latest Release"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl mb-4">Crimson Secrets</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  In a moonlit world of passion and danger, two souls discover that the greatest
                  mysteries lie within the heart. When detective Isabella Monroe investigates a
                  series of mysterious disappearances, she never expected to fall for the enigmatic
                  stranger who holds all the answers.
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">Genre:</span>
                    <span>Romantic Mystery, Suspense</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Published:</span>
                    <span>2024</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient inline-block"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="https://barnesandnoble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    Barnes & Noble
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl text-white mb-4">Stay Connected</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates on new releases, exclusive content, and behind-the-scenes
              insights into Nicole's writing journey.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h3 className="text-2xl mb-4">Love and Mystery by Nicole Clark</h3>
            <p className="text-white/80 mb-6">
              Where romance meets mystery in unforgettable stories
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:contact@nicoleclark.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                Email
              </a>
              <span className="text-white/40">•</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span className="text-white/40">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 Nicole Clark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
