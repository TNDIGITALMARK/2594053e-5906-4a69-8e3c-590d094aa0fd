import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Compact Header */}
      <nav className="bg-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-1.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-lg md:text-xl text-primary hover:text-secondary transition-colors">
                Love and Mystery by Nicole Clark
              </h1>
            </Link>
            <div className="hidden md:flex items-center gap-6">
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

      {/* Hero Section - Modern Design with Background */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-background.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                  Where Love Meets Mystery
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
                  Discover captivating tales of passion and intrigue by Nicole Clark.
                  Each story weaves romance and suspense into unforgettable journeys.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/books"
                  className="btn-gradient inline-block text-center px-10 py-4 text-lg"
                >
                  Explore Books
                </Link>
                <a
                  href="#newsletter"
                  className="inline-block px-10 py-4 text-lg rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all text-center"
                >
                  Get Updates
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Published Novels</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Reader Favorite</div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Book Showcase */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>

              {/* Book Display */}
              <div className="relative z-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {/* Left book - smaller */}
                <div className="relative aspect-[2/3] book-cover overflow-hidden transform translate-y-8 opacity-80 hover:opacity-100 transition-all duration-300 w-full">
                  <Image
                    src="/generated/whispers-garden.png"
                    alt="Whispers in the Garden"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                  />
                </div>

                {/* Center book - featured (larger) */}
                <div className="relative aspect-[2/3] book-cover overflow-hidden transform scale-125 z-20 shadow-2xl w-full">
                  <Image
                    src="/generated/crimson-secrets.png"
                    alt="Crimson Secrets - Latest Release"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                  />
                  {/* Latest badge */}
                  <div className="absolute top-4 -right-2 bg-secondary text-foreground px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    LATEST
                  </div>
                </div>

                {/* Right book - smaller */}
                <div className="relative aspect-[2/3] book-cover overflow-hidden transform translate-y-8 opacity-80 hover:opacity-100 transition-all duration-300 w-full">
                  <Image
                    src="/generated/shadows-love.png"
                    alt="Shadows of Love"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none z-[5]"></div>
      </section>

      {/* Latest Release Section */}
      <section className="py-16 md:py-24 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Latest Release</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into the newest tale of passion and mystery
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[2/3] book-cover overflow-hidden max-w-md mx-auto hover-lift w-full">
              <Image
                src="/generated/crimson-secrets-hero.png"
                alt="Crimson Secrets - Latest Release Book Cover"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 448px"
                quality={95}
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-3xl md:text-4xl mb-4">Crimson Secrets</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  In a moonlit world of passion and danger, two souls discover that the greatest
                  mysteries lie within the heart. When detective Isabella Monroe investigates a
                  series of mysterious disappearances, she never expected to fall for the enigmatic
                  stranger who holds all the answers.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 py-4 border-y border-border/50 justify-center md:justify-start">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Genre</div>
                  <div className="text-base font-semibold">Romantic Mystery, Suspense</div>
                </div>
                <div className="h-auto w-px bg-border"></div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Published</div>
                  <div className="text-base font-semibold">2024</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-block px-8 py-3"
                >
                  Buy on Amazon
                </a>
                <a
                  href="https://barnesandnoble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                >
                  Barnes & Noble
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Themes Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">The Heart of Every Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three essential elements that make every tale unforgettable
            </p>
          </div>
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
      <section className="py-16 md:py-24 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">What Readers Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of readers who have fallen in love with these stories
            </p>
          </div>
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
      <section id="newsletter" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-on-dark max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-4xl md:text-5xl mb-6">Stay Connected</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
                Subscribe to receive updates on new releases, exclusive content, and behind-the-scenes
                insights into Nicole's writing journey.
              </p>
              <form className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 backdrop-blur-sm transition-all text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="px-10 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/95 hover:shadow-lg transition-all text-lg whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-primary to-primary/95 py-16 mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center text-on-dark max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl mb-6">Love and Mystery by Nicole Clark</h3>
            <p className="text-xl mb-10 text-white/90">
              Where romance meets mystery in unforgettable stories
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <a
                href="mailto:contact@nicoleclark.com"
                className="text-light-muted hover:text-white transition-colors text-lg font-medium"
              >
                Email
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-white transition-colors text-lg font-medium"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-white transition-colors text-lg font-medium"
              >
                Instagram
              </a>
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-light-subtle">
                © 2024 Nicole Clark. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
