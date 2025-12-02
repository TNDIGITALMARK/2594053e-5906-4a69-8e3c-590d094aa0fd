import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Heart, Sparkles, Award, Users, Mail } from "lucide-react";

export default function AboutPage() {
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
                className="text-sm font-medium text-secondary transition-colors uppercase tracking-wider"
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
            <h1 className="text-4xl md:text-5xl mb-6">About Nicole Clark</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Weaving tales of romance and mystery that captivate the heart and intrigue the mind
            </p>
          </div>
        </div>
      </section>

      {/* Author Story */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl mb-6">The Journey of an Author</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nicole Clark has always been fascinated by the delicate dance between love and
                  mystery. Growing up surrounded by classic romance novels and detective stories, she
                  discovered her unique voice by blending these two beloved genres into something
                  entirely her own.
                </p>
                <p>
                  With 6-7 published novels to her name, Nicole has crafted worlds where passion and
                  intrigue walk hand in hand. Her stories transport readers to moonlit gardens,
                  mysterious mansions, and shadowy city streets—places where hearts can be both lost
                  and found, where every secret revealed brings two souls closer together.
                </p>
                <p>
                  "I believe that the best mysteries aren't just about solving a case," Nicole says,
                  "they're about discovering the depths of the human heart. Love itself is the
                  greatest mystery we'll ever encounter."
                </p>
                <p>
                  When she's not writing, Nicole enjoys exploring historic estates, collecting vintage
                  mystery novels, and sipping tea in her garden while plotting her next romantic
                  thriller. She lives with her family and two mischievous cats who often find their
                  way into her stories.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-2xl p-12 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-6xl text-white font-serif italic">NC</span>
                </div>
                <h3 className="text-2xl mb-2">Nicole Clark</h3>
                <p className="text-muted-foreground mb-6">Romance & Mystery Author</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">6-7</div>
                    <div className="text-sm text-muted-foreground">Published Novels</div>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Years Writing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Philosophy */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center text-on-dark">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-3xl md:text-4xl mb-6">Writing Philosophy</h2>
              <blockquote className="text-xl italic leading-relaxed mb-6">
                "Every great love story deserves a touch of mystery, and every compelling mystery
                needs the warmth of human connection. I write to explore the spaces where these two
                worlds collide—where danger makes hearts beat faster, where trust must be earned,
                and where love becomes the ultimate revelation."
              </blockquote>
              <p className="text-light-muted">— Nicole Clark</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Readers Love */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">What Readers Love</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            <div className="glass-card-subtle rounded-2xl p-8 text-center hover:glass-card transition-all duration-300">
              <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-3">Captivating Romance</h3>
              <p className="text-muted-foreground">
                Chemistry that leaps off the page, with authentic relationships that grow through
                challenges and mysteries
              </p>
            </div>
            <div className="glass-card-subtle rounded-2xl p-8 text-center hover:glass-card transition-all duration-300">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-3">Gripping Mysteries</h3>
              <p className="text-muted-foreground">
                Clever plots with unexpected twists that keep you guessing until the very last page
              </p>
            </div>
            <div className="glass-card-subtle rounded-2xl p-8 text-center hover:glass-card transition-all duration-300">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-3">Atmospheric Settings</h3>
              <p className="text-muted-foreground">
                From Gothic mansions to moonlit gardens, settings that become characters in their
                own right
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Testimonials */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12">What Readers Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Nicole Clark has mastered the art of keeping me up all night! Just when I think I've
                figured out the mystery, she throws in a romantic twist that makes my heart skip a
                beat. I've read all her books and can't wait for the next one!"
              </p>
              <p className="font-semibold">— Sarah M., Book Club Leader</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "I'm a huge mystery fan but never thought I'd enjoy romance novels. Nicole's books
                changed my mind completely. The mysteries are intelligent and the romances feel real.
                She's become my favorite author!"
              </p>
              <p className="font-semibold">— Michael R., Avid Reader</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The perfect blend of suspense and romance! Nicole's writing transports you to
                another world. Her descriptions are so vivid, I felt like I was walking through those
                mysterious mansions myself."
              </p>
              <p className="font-semibold">— Jennifer L., Romance Enthusiast</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Every book is a journey. Nicole Clark doesn't just write stories—she crafts
                experiences. I've recommended her books to everyone in my book club, and they all
                agree: she's phenomenal!"
              </p>
              <p className="font-semibold">— David K., Mystery Novel Fan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-8">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Readers' Choice Award</h4>
                  <p className="text-sm text-muted-foreground">
                    Best Romantic Mystery, 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Romance Writers Association</h4>
                  <p className="text-sm text-muted-foreground">
                    Nominee, Best First Novel, 2021
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Mystery Lovers Award</h4>
                  <p className="text-sm text-muted-foreground">
                    Top 10 New Mystery Authors, 2022
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Book Club Favorite</h4>
                  <p className="text-sm text-muted-foreground">
                    Most Recommended Author, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 text-center text-on-dark max-w-4xl mx-auto">
            <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl mb-4">Let's Stay in Touch</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join the community of readers who love romantic mysteries. Get exclusive updates,
              behind-the-scenes content, and be the first to know about new releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#newsletter"
                className="inline-block px-8 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-all"
              >
                Subscribe to Newsletter
              </a>
              <a
                href="mailto:contact@nicoleclark.com"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition-all"
              >
                Send a Message
              </a>
            </div>
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
