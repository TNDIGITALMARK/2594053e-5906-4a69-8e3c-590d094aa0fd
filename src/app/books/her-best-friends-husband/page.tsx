import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Star, BookOpen, Clock, Award } from "lucide-react";

export default function HerBestFriendsHusbandPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl text-primary hover:text-secondary transition-colors">
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

      {/* Hero Section with Book Cover */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Books</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Book Cover */}
            <div className="relative aspect-[2/3] book-cover overflow-hidden max-w-lg mx-auto hover-lift w-full">
              <Image
                src="/books/her-best-friends-husband.webp"
                alt="Her Best Friend's Husband - Book Cover"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 512px"
                quality={95}
              />
            </div>

            {/* Book Details */}
            <div className="space-y-6 text-center md:text-left">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Contemporary Romance
                </p>
                <h1 className="text-4xl md:text-5xl mb-4">
                  Her Best Friend's Husband
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Kandi goes to Texas to see her best friend Janie and ends up falling in love
                  with her best friend's husband Cole. A story of forbidden desire, complicated
                  emotions, and the consequences of following your heart when you know you shouldn't.
                </p>
              </div>

              {/* Book Stats */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-border/50 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Pages</div>
                    <div className="text-base font-semibold">312</div>
                  </div>
                </div>
                <div className="h-auto w-px bg-border"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Published</div>
                    <div className="text-base font-semibold">2024</div>
                  </div>
                </div>
                <div className="h-auto w-px bg-border"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                    <div className="text-base font-semibold flex items-center gap-1">
                      4.7/5 <Star className="w-4 h-4 fill-secondary text-secondary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Buttons */}
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex items-center gap-2 px-8 py-3"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Buy on Amazon</span>
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

      {/* About the Story */}
      <section className="py-16 md:py-24 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">About the Story</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                When Kandi decides to visit her best friend Janie in Texas, she expects a relaxing
                getaway filled with laughter and catching up. What she doesn't expect is the
                immediate and undeniable connection she feels with Cole—Janie's husband.
              </p>
              <p>
                As stolen glances turn into lingering conversations, Kandi finds herself torn
                between loyalty to her best friend and the pull of a love that feels impossible
                to ignore. Cole, struggling with his own feelings, finds in Kandi everything
                he's been missing in his marriage.
              </p>
              <p>
                In this emotionally charged contemporary romance, Nicole Clark explores the
                complexities of desire, friendship, and the heart-wrenching choices we make
                when love and loyalty collide. With rich character development and an authentic
                portrayal of forbidden attraction, "Her Best Friend's Husband" will keep you
                turning pages late into the night.
              </p>
            </div>

            {/* Key Themes */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-card-subtle rounded-xl p-6 text-center hover:glass-card transition-all">
                <h3 className="text-xl font-semibold mb-3 text-primary">Forbidden Love</h3>
                <p className="text-muted-foreground">
                  A powerful attraction that defies boundaries and tests the limits of the heart
                </p>
              </div>
              <div className="glass-card-subtle rounded-xl p-6 text-center hover:glass-card transition-all">
                <h3 className="text-xl font-semibold mb-3 text-primary">Friendship & Loyalty</h3>
                <p className="text-muted-foreground">
                  The bonds that tie us together and the choices that can tear them apart
                </p>
              </div>
              <div className="glass-card-subtle rounded-xl p-6 text-center hover:glass-card transition-all">
                <h3 className="text-xl font-semibold mb-3 text-primary">Emotional Depth</h3>
                <p className="text-muted-foreground">
                  Raw, authentic exploration of complicated feelings and moral dilemmas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Reviews */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Readers Are Saying</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">4.7 out of 5 stars</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="glass-card rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "I couldn't put this book down! Nicole Clark has crafted a story that's both
                heartbreaking and beautiful. The emotional complexity is stunning."
              </p>
              <p className="font-medium">— Rachel T.</p>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "A brave exploration of complicated relationships. The characters felt so real
                and their struggles so authentic. Powerful storytelling!"
              </p>
              <p className="font-medium">— Michelle K.</p>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
                <Star className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "This book had me feeling all the emotions. It's a story about love, loyalty,
                and impossible choices. Highly recommend for fans of emotional romance."
              </p>
              <p className="font-medium">— Lisa M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* More Books CTA */}
      <section className="py-12 md:py-16 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="bg-primary/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 text-center text-on-dark max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Explore More Stories</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Discover more captivating tales of love and mystery from Nicole Clark's
              collection of contemporary romance and thriller novels.
            </p>
            <Link
              href="/books"
              className="inline-block px-10 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/95 hover:shadow-lg transition-all text-lg"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-primary to-primary/95 py-16 mt-12">
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
