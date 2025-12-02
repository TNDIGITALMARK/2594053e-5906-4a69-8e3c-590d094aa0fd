import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl text-primary hover:text-secondary transition-colors">
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
          {/* Author Introduction - Moved to top for better hierarchy */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Welcome to a World of Romance and Mystery
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Step into the enchanting worlds created by Nicole Clark, where love and mystery
              intertwine in captivating tales. With 6-7 published novels, Nicole weaves stories
              of passion, secrets, and intrigue that will keep you turning pages late into the night.
            </p>
          </div>

          {/* Featured Books Showcase - Improved layout */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto items-end">
              <div className="relative aspect-[2/3] book-cover overflow-hidden mx-auto w-full max-w-[280px] sm:max-w-none">
                <Image
                  src="/generated/whispers-garden.png"
                  alt="Whispers in the Garden"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-[2/3] book-cover overflow-hidden mx-auto w-full max-w-[280px] sm:max-w-none sm:scale-110 sm:-translate-y-6 z-10">
                <Image
                  src="/generated/crimson-secrets.png"
                  alt="Crimson Secrets"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-[2/3] book-cover overflow-hidden mx-auto w-full max-w-[280px] sm:max-w-none">
                <Image
                  src="/generated/shadows-love.png"
                  alt="Shadows of Love"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/books" className="btn-gradient inline-block text-center">
              Explore All Books
            </Link>
            <a
              href="#newsletter"
              className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all text-center"
            >
              Join Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[2/3] book-cover overflow-hidden max-w-sm mx-auto">
              <Image
                src="/generated/crimson-secrets-hero.png"
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
      </section>

      {/* Writing Themes Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">The Heart of Every Story</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            <div className="glass-card-subtle rounded-xl p-8 text-center hover:glass-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-4">Passionate Romance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Love stories that sweep you off your feet, with deeply emotional connections and
                characters who will capture your heart.
              </p>
            </div>
            <div className="glass-card-subtle rounded-xl p-8 text-center hover:glass-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-4">Gripping Mystery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secrets that unravel with every turn of the page, keeping you guessing until
                the final reveal in each suspenseful tale.
              </p>
            </div>
            <div className="glass-card-subtle rounded-xl p-8 text-center hover:glass-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl mb-4">Atmospheric Settings</h3>
              <p className="text-muted-foreground leading-relaxed">
                Richly detailed worlds from moonlit gardens to mysterious estates that transport
                you into the heart of every story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">What Readers Are Saying</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="glass-card rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Nicole Clark has a gift for weaving romance and mystery together. I couldn't put
                Crimson Secrets down! The perfect blend of suspense and heart."
              </p>
              <p className="font-medium">— Sarah M.</p>
            </div>
            <div className="glass-card rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Beautiful prose and captivating characters. Every book transports me to another
                world. Nicole Clark is a master storyteller!"
              </p>
              <p className="font-medium">— Jennifer K.</p>
            </div>
            <div className="glass-card rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The perfect escape! Nicole's books are exactly what I look for in romantic mystery.
                Can't wait for the next release!"
              </p>
              <p className="font-medium">— Amanda R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 text-center text-on-dark max-w-4xl mx-auto">
            <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl mb-4">Stay Connected</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
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
