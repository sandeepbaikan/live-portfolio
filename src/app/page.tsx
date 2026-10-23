import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Layers3,
  MoveUpRight,
  TerminalSquare,
  Workflow,
  Award,
  ExternalLink,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { ResumeLink } from "@/components/resume-link";
import { AiAssistant } from "@/components/ai-assistant";
import {
  certificates,
  experience,
  profile,
  projects,
  skills,
} from "@/data/portfolio";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero shell">
          <div className="hero-kicker">
            <span className="green-dot" /> PORTFOLIO / 2026{" "}
            <span className="hero-line" /> {profile.status}
          </div>
          <div className="hero-main">
            <div>
              <p className="eyebrow">
                HI, I’M SANDEEP BAIKAN — UI ENGINEERING LEAD
              </p>
              <h1>
                Designing
                <br />
                <span className="hero-outline">what’s next</span>
                <span className="hero-period">.</span>
              </h1>
              <p className="hero-description">{profile.summary}</p>
              <div className="hero-actions">
                <a href="#work" className="button-primary">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <ResumeLink className="button-secondary" placement="hero" />
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-orbit art-orbit-one" />
              <div className="art-orbit art-orbit-two" />
              <div className="art-core">
                <Layers3 size={70} strokeWidth={0.8} />
              </div>
              <span className="art-label art-label-top">
                ARCHITECTURE
                <br />+ CRAFT
              </span>
              <span className="art-label art-label-bottom">
                REACT / NODE
                <br />
                SYSTEMS
              </span>
              <div className="art-cross">+</div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-stat">
              <strong>
                10<span>+</span>
              </strong>
              <span>
                YEARS IN
                <br />
                ENGINEERING
              </span>
            </div>
            <div className="hero-stat">
              <strong>03</strong>
              <span>
                SELECTED
                <br />
                PROJECTS
              </span>
            </div>
            <div className="hero-stat">
              <strong>01</strong>
              <span>
                GOAL: BETTER
                <br />
                DIGITAL PRODUCTS
              </span>
            </div>
            <a
              className="scroll-cue"
              href="#work"
              aria-label="Scroll to selected work"
            >
              <ArrowDown size={19} />
            </a>
          </div>
        </section>
        <section className="section work-section" id="work">
          <div className="shell">
            <Reveal>
              <div className="section-intro">
                <div>
                  <p className="eyebrow">01 / SELECTED WORK</p>
                  <h2>
                    Built for impact<span className="highlight">.</span>
                  </h2>
                </div>
                <p>
                  Real engineering challenges, practical solutions, and
                  thoughtful delivery. Selected work is described without
                  private client details.
                </p>
              </div>
            </Reveal>
            <div className="project-list">
              {projects.map((p, index) => (
                <Reveal key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="project-card">
                    <div
                      className="project-art"
                      style={
                        { "--case-accent": p.accent } as React.CSSProperties
                      }
                    >
                      <div className="project-art-grid" />
                      <div className="project-art-shape">
                        {index === 0 ? (
                          <Layers3 size={80} strokeWidth={0.75} />
                        ) : index === 1 ? (
                          <TerminalSquare size={80} strokeWidth={0.75} />
                        ) : (
                          <Workflow size={80} strokeWidth={0.75} />
                        )}
                      </div>
                      <span>{p.number} / CASE STUDY</span>
                    </div>
                    <div className="project-info">
                      <span className="eyebrow">{p.category}</span>
                      <h3>{p.name}</h3>
                      <p>{p.overview}</p>
                      <div className="tag-list">
                        {p.technologies.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <span className="project-read">
                        View case study <MoveUpRight size={17} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="section experience-section" id="experience">
          <div className="shell experience-layout">
            <Reveal>
              <div className="experience-heading">
                <p className="eyebrow">02 / JOURNEY</p>
                <h2>
                  More than
                  <br />
                  <em>writing code.</em>
                </h2>
                <p>
                  From interface craftsmanship to architecture and delivery
                  leadership: always focused on reliable software and capable
                  teams.
                </p>
              </div>
            </Reveal>
            <div className="timeline">
              {experience.map((item, i) => (
                <Reveal key={item.title}>
                  <div className="timeline-item">
                    <span className="timeline-index">0{i + 1}</span>
                    <div>
                      <span className="eyebrow">{item.period}</span>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="section skills-section">
          <div className="shell">
            <Reveal>
              <div className="section-intro">
                <div>
                  <p className="eyebrow">03 / CAPABILITIES</p>
                  <h2>
                    My toolkit<span className="highlight">.</span>
                  </h2>
                </div>
                <p>
                  Technologies I use, practices I champion, and fields I’m
                  actively developing.
                </p>
              </div>
            </Reveal>
            <div className="skills-grid">
              {skills.map((s, i) => (
                <Reveal key={s.group}>
                  <div className="skill-card">
                    <div className="skill-card-title">
                      <span>0{i + 1}</span>
                      <h3>{s.group}</h3>
                    </div>
                    <div className="tag-list">
                      {s.items.map((it) => (
                        <span key={it}>{it}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="section certificate-section" id="certificates">
          <div className="shell">
            <Reveal>
              <div className="section-intro">
                <div>
                  <p className="eyebrow">04 / CONTINUED LEARNING</p>
                  <h2>
                    Credentials &amp; growth<span className="highlight">.</span>
                  </h2>
                </div>
                <p>
                  Courses completed in large-scale software architecture and
                  full-stack engineering. Certificates can be independently
                  verified on Udemy.
                </p>
              </div>
            </Reveal>
            <div className="certificate-grid">
              {certificates.map((c, index) => (
                <Reveal key={c.id}>
                  <article className="certificate-card">
                    <div className="certificate-top">
                      <div className="certificate-symbol" aria-hidden="true">
                        <Award size={27} />
                      </div>
                      <span className="certificate-number">
                        0{index + 1} / VERIFIED CREDENTIAL
                      </span>
                    </div>
                    <p className="eyebrow">
                      {c.issuer} · {c.issued}
                    </p>
                    <h3>{c.title}</h3>
                    <div className="tag-list">
                      {c.topics.map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                    <p className="certificate-id">Credential ID: {c.id}</p>
                    <a
                      className="certificate-view"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View Udemy certificate: ${c.title} (opens in a new tab)`}
                    >
                      View certificate <ExternalLink size={17} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="section ai-section" id="ai">
          <div className="shell ai-grid">
            <Reveal>
              <div className="ai-copy">
                <p className="eyebrow">05 / AI EXPLORATION</p>
                <h2>
                  An AI layer,
                  <br />
                  <em>with purpose.</em>
                </h2>
                <p>
                  An assistant grounded in public portfolio details. In demo
                  mode it answers common questions locally; with a configured
                  API key it uses a server-side AI endpoint.
                </p>
                <div className="ai-feature">
                  <span>01</span> Grounded in published project data
                </div>
                <div className="ai-feature">
                  <span>02</span> Server-only API credentials
                </div>
                <div className="ai-feature">
                  <span>03</span> No confidential employer information
                </div>
                <p className="small-disclaimer">
                  This demonstrates AI integration exploration, not a claim of
                  prior production GenAI leadership.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <AiAssistant />
            </Reveal>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">06 / NEXT CONVERSATION</p>
              <div className="contact-layout">
                <h2>
                  Let&apos;s build
                  <br />
                  <em>something</em>
                  <br />
                  great<span>.</span>
                </h2>
                <div className="contact-side">
                  <p>
                    Looking for an engineering lead who blends deep frontend
                    expertise, full-stack perspective, and delivery ownership?
                    I&apos;d love to connect.
                  </p>
                  <div className="contact-actions">
                    <ResumeLink
                      className="button-primary"
                      placement="contact"
                    />
                    {profile.email ? (
                      <a
                        href={`mailto:${profile.email}`}
                        className="button-primary"
                      >
                        Send an email <ArrowUpRight size={18} />
                      </a>
                    ) : (
                      <span className="contact-placeholder">
                        Contact email: add your address in src/data/portfolio.ts
                      </span>
                    )}
                    {profile.linkedin && (
                      <a
                        className="contact-text-link"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn <ArrowUpRight size={16} />
                      </a>
                    )}
                    {profile.github && (
                      <a
                        className="contact-text-link"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                  <span className="contact-location">{profile.location}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <Link href="/" className="footer-logo">
          SB<span>.</span>
        </Link>
        <span>
          © {new Date().getFullYear()} {profile.name} · Built with Next.js
        </span>
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}
