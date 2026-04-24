import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PresenceGallery from "@/components/PresenceGallery";
import QuoteCarousel from "@/components/QuoteCarousel";
import Reveal from "@/components/Reveal";
import {
  builds,
  media,
  mentions,
  navigation,
  presenceGallery,
  socials,
  stats,
  writings
} from "@/lib/siteData";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M6 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M6 4.5v11l8.5-5.5L6 4.5z" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Shivendra.ai home">
          Shivendra.ai
        </a>
        <nav>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/hero-profile.jpg"
          alt="Portrait of Shivendra Pratap Singh"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content hero-centered">
          <Reveal>
            <p className="eyebrow">Shivendra.ai</p>
            <h1 id="hero-title" className="hero-name">
              Shivendra Pratap Singh
            </h1>
            <p className="hero-heading">
              Building High-Performance Organizations in the Age of AI
            </p>
            <p className="hero-subtitle">
              Chief People Officer | Speaker | AI-in-HR Thought Leader
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#contact">
                Invite to Speak
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#presence">
                View Presence
                <ArrowIcon />
              </a>
            </div>
            <div className="hero-strip">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-layout">
          <Reveal>
            <div className="about-portrait">
              <Image
                src="/images/about-profile.jpg"
                alt="Portrait of Shivendra Pratap Singh"
                fill
                sizes="(min-width: 980px) 36vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="about-copy">
              <p className="section-kicker">About</p>
              <h2>Calm judgment. Systems thinking. Leadership that scales.</h2>
              <div className="prose">
                <p>
                  Shivendra Pratap Singh is Chief People Officer at Ergode, where he
                  works across people strategy, global operations, leadership
                  capability, and organization design.
                </p>
                <p>
                  His work sits at the intersection of HR, AI, and execution:
                  helping organizations build sharper cultures, stronger managers,
                  and practical adoption paths for emerging technology.
                </p>
                <p>
                  He is known for translating complexity into operating rhythm,
                  creating people systems that are thoughtful, modern, and grounded
                  in real business outcomes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="presence" className="section presence-section">
        <div className="section-heading section-heading-wide">
          <Reveal>
            <p className="section-kicker">Public Presence</p>
            <h2>Proof of stage presence, credibility, and recognition.</h2>
            <p className="section-intro">
              Selected moments across conferences, panel discussions, and leadership
              recognition. Curated to show range without turning the homepage into a
              gallery.
            </p>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <PresenceGallery items={presenceGallery} />
        </Reveal>
      </section>

      <section id="writing" className="section writing-section">
        <div className="section-grid">
          <Reveal>
            <p className="section-kicker">Articles & Thought Leadership</p>
            <h2>Clear thinking on AI, culture, and the people function.</h2>
          </Reveal>
          <div className="stack">
            <Reveal delay={80}>
              <div className="list-block">
                <div className="list-header">
                  <h3>Shivendra&apos;s Writings</h3>
                  <span>Selected essays</span>
                </div>
                {writings.map((item) => (
                  <article className="text-card" key={item.title}>
                    <time>{item.date}</time>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="list-block warm">
                <div className="list-header">
                  <h3>Featured Mentions</h3>
                  <span>Public signals</span>
                </div>
                {mentions.map((item) => (
                  <article className="text-card" key={item.title}>
                    <time>{item.source}</time>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      {item.href ? (
                        <a
                          className="mention-link"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.cta}
                          <ArrowIcon />
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="media" className="section media-section">
        <div className="section-heading compact">
          <Reveal>
            <p className="section-kicker">Podcasts & Media</p>
            <h2>Conversations on AI, talent, and the future of HR.</h2>
          </Reveal>
        </div>
        {media.map((item) => (
          <Reveal key={item.title}>
            <article className="featured-media-card">
              <div className="featured-media-copy">
                <span className="media-icon" aria-hidden="true">
                  <PlayIcon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="featured-media-actions">
                <a
                  className="button button-primary"
                  href={item.primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.primaryLink.label}
                  <PlayIcon />
                </a>
                <div className="featured-secondary-actions">
                  {item.secondaryLinks.map((link) => (
                    <a
                      key={link.label}
                      className="button button-secondary media-secondary-button"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="platform-pills">
                  {item.tertiaryLinks.map((link) => (
                    <a
                      key={link.label}
                      className="platform-pill"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section id="ideas" className="section ideas-section">
        <div className="section-heading compact">
          <Reveal>
            <p className="section-kicker">Ideas & Builds</p>
            <h2>Builder energy behind the people agenda.</h2>
          </Reveal>
        </div>
        <div className="ideas-grid">
          {builds.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="idea-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="quote-section" aria-label="Leadership philosophy">
        <Reveal>
          <QuoteCarousel />
        </Reveal>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-layout">
          <Reveal>
            <p className="section-kicker">Contact / Speaking</p>
            <h2>Let&apos;s Work Together</h2>
            <p className="contact-copy">
              For speaking, consulting, or collaboration inquiries, share the
              context and the outcome you want the room to leave with.
            </p>
            <div className="contact-options" aria-label="Ways to work together">
              <span>Speaking</span>
              <span>Consulting</span>
              <span>Collaboration</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Shivendra Pratap Singh</strong>
        <div>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
        <span>© {new Date().getFullYear()} Shivendra.ai</span>
      </footer>
    </main>
  );
}
