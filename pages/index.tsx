import Head from 'next/head';
import {
  Anchor,
  ArrowDown,
  ExternalLink,
  GitFork,
  Mail,
  MapPin,
  Phone,
  ScrollText,
  Send,
} from 'lucide-react';
import { RESUME_DATA } from '@/utils/data';

const allSkills = [
  ...RESUME_DATA.skills.languages,
  ...RESUME_DATA.skills.frontend,
  ...RESUME_DATA.skills.backend,
  ...RESUME_DATA.skills.ml,
  ...RESUME_DATA.skills.cloud,
];

const navItems = [
  { label: 'Bounty', href: '#bounty' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{RESUME_DATA.personal.name} | Wanted Portfolio</title>
        <meta
          name="description"
          content="A One Piece inspired wanted poster portfolio for Sandesh Kumar, full-stack developer and AI/ML engineer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#20160b" />
        <link rel="icon" type="image/png" href="/az-logo-brown.png" />
        <link rel="apple-touch-icon" href="/az-logo-brown.png" />
      </Head>

      <main className="min-h-screen bg-[#20160b] text-[#25170a]">
        <section id="top" className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[52vh] overflow-hidden bg-black lg:min-h-screen">
            {/* Replace this with your actual intro video in /public when needed. */}
            <video
              src="/Hey_with_the_help_of_two_image.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/cartoon.png"
              className="h-full w-full object-cover opacity-80 sepia-[0.35]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.84)_100%)]" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-y border-[#d8b878]/40 py-3 text-xs uppercase tracking-[0.28em] text-[#f7e5b5]">
              <span>Grand Line Archive</span>
              <span>Loop 001</span>
            </div>
          </div>

          <div className="paper-surface relative flex min-h-[52vh] items-center justify-center px-6 py-20 lg:min-h-screen lg:px-12">
            <nav className="absolute left-6 right-6 top-5 z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.22em] text-[#3a2410]">
              <a href="#top" className="inline-flex items-center" aria-label="AZ home">
                {/* Replace /az-logo-brown.png with your final logo file in /public if needed. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/az-logo-brown.png" alt="AZ logo" className="site-logo" />
              </a>
              <div className="flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="nav-link">
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="max-w-xl pt-12">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#7a4720]">
                Ahoy, I am
              </p>
              <h1 className="wanted-title hero-wanted">
                Wanted
              </h1>
              <div className="mt-6 border-y-4 border-double border-[#2f1d0d] py-5">
                <p className="font-serif text-[clamp(2.2rem,6vw,5.4rem)] font-black uppercase leading-none">
                  {RESUME_DATA.personal.name}
                </p>
                <p className="mt-4 max-w-lg text-lg font-semibold text-[#513217]">
                  {RESUME_DATA.personal.title}. I build practical full-stack systems,
                  intelligent products, and sturdy user experiences with a pirate-paper soul.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#bounty" className="wanted-button">
                  View Bounty <ArrowDown className="h-4 w-4" />
                </a>
                <a href="#projects" className="wanted-button wanted-button-secondary">
                  Explore Logs <ScrollText className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="bounty" className="paper-band px-5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="wanted-poster mx-auto w-full max-w-[470px] p-5 sm:p-7">
              <header className="text-center">
                <p className="wanted-title poster-wanted">
                  Wanted
                </p>
                <p className="-mt-1 font-serif text-2xl font-black uppercase tracking-[0.18em]">
                  Dead or Alive
                </p>
              </header>

              <div className="photo-flip my-6 aspect-[4/3] w-full border-[5px] border-[#2b1b0d] bg-[#2b1b0d]">
                <div className="photo-flip-inner">
                  <div className="photo-fallback">
                    <span>Photo Missing</span>
                    <small>Add my-pic.jpeg and sanji-bounty.webp to /public</small>
                  </div>
                  {/* Replace /my-pic.jpeg with your personal photo in /public. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/my-pic.jpeg"
                    alt={`${RESUME_DATA.personal.name} portrait`}
                    className="photo-face photo-front"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Replace /sanji-bounty.webp with the Sanji image in /public. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/sanji-bounty.webp"
                    alt="Sanji bounty alternate portrait"
                    className="photo-face photo-back"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="font-serif text-[clamp(2.25rem,8vw,4.6rem)] font-black uppercase leading-[0.88]">
                  {RESUME_DATA.personal.name}
                </p>
                <p className="mt-5 border-y-2 border-[#2b1b0d] py-3 text-xs font-black uppercase tracking-[0.22em] sm:text-sm">
                  Issued by Kalinga Institute of Industrial Technology
                </p>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.24em] text-[#7a4720]">
                  Academic Record: CGPA {RESUME_DATA.education.cgpa}
                </p>
              </div>
            </article>

            <div className="logbook-panel p-6 sm:p-8">
              <p className="section-kicker">Professional Journey</p>
              <h2 className="mt-3 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
                Crew Records & Resume Logs
              </h2>
              <p className="mt-4 max-w-2xl text-base font-medium text-[#5a3718]">
                A compact record of internships, education, and build history, arranged like a
                ship log instead of a plain resume block.
              </p>

              <div className="mt-8 space-y-5">
                {RESUME_DATA.experience.map((job) => (
                  <div key={job.company} className="timeline-entry">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-2xl font-black uppercase">
                          {job.position}
                        </h3>
                        <p className="font-bold text-[#7a4720]">{job.company}</p>
                      </div>
                      <span className="stamp">{job.period}</span>
                    </div>
                    <p className="mt-3 text-[#4b2f17]">{job.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span key={tech} className="mini-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[#5d3b1d]/30 pt-5">
                <h3 className="font-serif text-xl font-black uppercase">Education Log</h3>
                <p className="mt-2 font-bold">{RESUME_DATA.education.degree}</p>
                <p className="text-[#5a3718]">{RESUME_DATA.education.school}</p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#7a4720]">
                  {RESUME_DATA.education.period} / CGPA {RESUME_DATA.education.cgpa}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="charcoal-band px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker text-[#e4c17b]">Technical Arsenal</p>
            <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="font-serif text-4xl font-black uppercase text-[#f7e5b5] sm:text-5xl">
                Tech Stack
              </h2>
              <p className="max-w-xl text-[#d2ba8a]">
                Clean tags only. No fake meters, no inflated percentages, just the tools I use.
              </p>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {allSkills.map((skill) => (
                <div key={skill} className="skill-tag">
                  <Anchor className="h-4 w-4" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="paper-band px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Pinned GitHub Logs</p>
            <h2 className="mt-3 font-serif text-4xl font-black uppercase sm:text-5xl">
              Featured Projects
            </h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {RESUME_DATA.projects.map((project) => (
                <article key={project.id} className="project-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#875126]">
                        {project.date}
                      </p>
                      <h3 className="mt-2 font-serif text-3xl font-black uppercase">
                        {project.name}
                      </h3>
                    </div>
                    <GitFork className="mt-1 h-6 w-6 shrink-0" />
                  </div>
                  <p className="mt-3 font-bold text-[#5a3718]">{project.tagline}</p>
                  <p className="mt-3 text-[#4b2f17]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="mini-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#2b1b0d] pb-1 text-sm font-black uppercase tracking-[0.16em]"
                  >
                    GitHub Repository <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="charcoal-band px-5 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-7">
              <p className="section-kicker text-[#e4c17b]">Contact Den Den Mushi</p>
              <h2 className="mt-2 font-serif text-3xl font-black uppercase text-[#f7e5b5]">
                {RESUME_DATA.personal.name}
              </h2>
              <p className="max-w-md text-[#d2ba8a]">
                Send a message to the captain&apos;s desk. The form opens your mail app with the
                query ready to dispatch.
              </p>
              <div className="grid gap-3 text-sm font-semibold text-[#f7e5b5]">
                <a className="contact-link" href={`mailto:${RESUME_DATA.personal.email}`}>
                  <Mail className="h-4 w-4" /> {RESUME_DATA.personal.email}
                </a>
                <a className="contact-link" href={`tel:${RESUME_DATA.personal.phone}`}>
                  <Phone className="h-4 w-4" /> {RESUME_DATA.personal.phone}
                </a>
                <span className="contact-link">
                  <MapPin className="h-4 w-4" /> {RESUME_DATA.personal.location}
                </span>
              </div>
            </div>

            <form
              className="query-form"
              action={`mailto:${RESUME_DATA.personal.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <span>Your Name</span>
                  <input name="name" type="text" placeholder="Monkey D. Recruiter" required />
                </label>
                <label>
                  <span>Your Email</span>
                  <input name="email" type="email" placeholder="crew@example.com" required />
                </label>
              </div>
              <label>
                <span>Subject</span>
                <input name="subject" type="text" placeholder="New voyage / role / project" />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your query like a message sealed for the Grand Line."
                  required
                />
              </label>
              <button type="submit" className="wanted-button">
                Send Query <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </footer>
      </main>
    </>
  );
}
