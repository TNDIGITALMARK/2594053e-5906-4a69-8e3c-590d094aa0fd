import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
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
                href="/contact"
                className="text-sm font-medium text-secondary transition-colors uppercase tracking-wider"
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
            <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'd love to hear from you! Whether you have questions about my books, want to discuss a book club visit, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-white/50 focus:border-primary focus:bg-white focus:outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-white/50 focus:border-primary focus:bg-white focus:outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-white/50 focus:border-primary focus:bg-white focus:outline-none transition-all"
                    placeholder="Book club inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-white/50 focus:border-primary focus:bg-white focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your question or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gradient w-full flex items-center justify-center gap-2 py-3 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card-subtle rounded-2xl p-8">
                <h2 className="text-3xl mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@nicoleclark.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@nicoleclark.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">Available via email request</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card-subtle rounded-2xl p-8">
                <h2 className="text-2xl mb-6">Follow Me</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Stay up to date with my latest releases, writing updates, and behind-the-scenes content on social media.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>

              {/* Book Club Visits */}
              <div className="glass-card-subtle rounded-2xl p-8">
                <h2 className="text-2xl mb-4">Book Club Visits</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I love connecting with readers! I'm available for virtual book club visits to discuss my novels, writing process, and answer questions.
                </p>
                <p className="text-sm text-muted-foreground">
                  Please email me with your book club details and preferred dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 text-center text-on-dark max-w-4xl mx-auto">
            <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl mb-4">Join My Newsletter</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive exclusive updates, behind-the-scenes content, and be the first to know about new releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 backdrop-blur-sm transition-all"
              />
              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/95 hover:shadow-lg transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 mt-16">
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
