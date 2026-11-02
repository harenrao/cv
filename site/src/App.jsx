import { useEffect, useRef, useState } from 'react'
import * as D from './data.js'

/* ---------- helpers ---------- */

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Fades and lifts children in once, the first time they enter the viewport.
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || reduceMotion() || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`rv ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

function CountUp({ n, dec = 0 }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (reduceMotion() || !('IntersectionObserver' in window)) return setV(n)
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1600, 1)
        setV(n * (1 - Math.pow(1 - p, 4)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [n])
  return <span ref={ref}>{v.toFixed(dec)}</span>
}

const Arrow = ({ dir = 'right' }) => <span className="ar" aria-hidden="true">{{ right: '→', down: '↓' }[dir]}</span>

const ICONS = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><path d="M14 17.5h7M17.5 14v7" /></>,
  cycle: <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /><path d="M8 12l3 3 5-6" /></>,
  doc: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>,
  bars: <><path d="M3 20h18" /><rect x="5" y="12" width="3" height="8" /><rect x="10.5" y="8" width="3" height="12" /><rect x="16" y="4" width="3" height="16" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  spark: <><path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
  list: <><path d="M4 6h16M4 12h10M4 18h6" /><circle cx="18" cy="16" r="3" /></>,
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  shield: <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></>,
  cap: <><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></>,
  bag: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></>,
  pin: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
}
const Icon = ({ name, ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    {ICONS[name]}
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5z" /></svg>
)

function SecHead({ eyebrow, children, center, aside }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''}`}>
      <div>
        <Reveal className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h2" className="h2" delay={80}>{children}</Reveal>
      </div>
      {aside && <Reveal delay={160}>{aside}</Reveal>}
    </div>
  )
}

/* ---------- sections ---------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let cur = 'home'
      for (const [id] of D.nav) {
        const s = document.getElementById(id)
        if (s && s.offsetTop <= window.scrollY + 160) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap">
          <a href="#home" className="logo"><span className="logo-mark">HS</span>Harender</a>
          <nav className="nav-links" aria-label="Primary">
            {D.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-pri nav-cta">Hire Me <Arrow /></a>
          <button className="burger" onClick={() => setOpen(true)} aria-label="Open menu"><span /><span /><span /></button>
        </div>
      </header>
      <div className={`m-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="m-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        {[...D.nav, ['faq', 'FAQ']].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  )
}

function Hero() {
  const p = D.profile
  return (
    <section className="hero" id="home">
      <div className="ghost ghost-v" aria-hidden="true">{p.first}</div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Reveal className="eyebrow">Hello</Reveal>
            <Reveal as="h1" delay={80}>I’m <span className="hl">{p.first}</span>,<br />{p.title} based in {p.city}.</Reveal>
            <Reveal as="p" className="hero-lead" delay={160}>{p.lead}</Reveal>
            <Reveal className="hero-btns" delay={240}>
              <a href="#contact" className="btn btn-pri">Hire Me <Arrow /></a>
              <a href={p.cv} download="HarenderSingh_CV.pdf" className="btn btn-line">Download CV <Arrow dir="down" /></a>
            </Reveal>
            <Reveal className="hero-proof" delay={320}>
              <div className="proof-logos">
                {[...D.clientLogos[0], D.clientLogos[1][2]].map((l) => <span key={l.alt}><img src={l.src} alt={l.alt} /></span>)}
              </div>
              <div className="proof-txt"><strong>14+</strong><small>Clients across Europe, the Americas, the Middle East and India</small></div>
            </Reveal>
          </div>

          <Reveal className="hero-photo" delay={200}>
            <div className="exp-badge"><strong>7+</strong><span>Years of experience</span></div>
            <div className="photo-frame"><img src={p.photo} alt={p.name} fetchpriority="high" /></div>
            <div className="float-card"><img src="./img/pmp.png" alt="" /><div><b>PMP® Certified</b><small>Project Management Institute</small></div></div>
            <div className="float-card two"><span className="mono">GT</span><div><b>Assistant Manager</b><small>Grant Thornton Bharat</small></div></div>
          </Reveal>
        </div>

        <div className="stats">
          {D.stats.map((s, i) => (
            <Reveal className="stat" key={s.label} delay={i * 80}>
              <strong>{s.prefix && <i>{s.prefix}</i>}<CountUp n={s.n} dec={s.dec} />{s.suffix === 'L' ? 'L' : <i>{s.suffix}</i>}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">SCROLL</div>
    </section>
  )
}

function Services() {
  return (
    <section className="services tint" id="services">
      <div className="ghost" aria-hidden="true">Services</div>
      <div className="wrap">
        <SecHead eyebrow="Services" aside={<a href="#contact" className="toggle-cta"><span className="knob" /><span className="lbl">Let’s talk</span></a>}>
          My <b>Services</b>
        </SecHead>
        <div className="svc-grid">
          {D.services.map((s, i) => (
            <Reveal as="article" className={`svc ${s.featured ? 'featured' : ''}`} key={s.title} delay={(i % 3) * 90}>
              <div className="svc-top"><div className="svc-ico"><Icon name={s.icon} /></div><span className="svc-arrow" aria-hidden="true">↗</span></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')
  const [all, setAll] = useState(false)
  const list = D.projects.filter((p) => (filter === 'all' ? all || !p.more : p.c === filter))
  return (
    <section className="projects" id="projects">
      <div className="ghost" aria-hidden="true">Projects</div>
      <div className="wrap">
        <SecHead eyebrow="Projects" center>My <b>Latest Projects</b></SecHead>
        <Reveal className="filters" role="group" aria-label="Filter projects">
          {D.filters.map(([id, label]) => (
            <button key={id} className={filter === id ? 'on' : ''} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>
          ))}
        </Reveal>
        <div className="proj-grid" key={filter + all}>
          {list.map((p, i) => (
            <Reveal as="article" className="proj" key={p.title} delay={(i % 3) * 90}>
              <div className={`proj-cover ${p.tone}`}>
                <span className="proj-tag">{p.tag}</span>
                <div className="proj-metric"><strong>{p.metric}</strong><span>{p.unit}</span></div>
              </div>
              <div className="proj-body">
                <div className="meta">{p.client}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.bullets && <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </div>
            </Reveal>
          ))}
        </div>
        {filter === 'all' && (
          <div className="center-row">
            <button className="btn btn-line" onClick={() => { setAll(!all); if (all) document.getElementById('projects').scrollIntoView() }}>
              {all ? 'Show fewer projects' : 'See all projects'} <Arrow dir={all ? 'right' : 'down'} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function Clients() {
  return (
    <div className="clients">
      <div className="wrap"><p>Representative clients</p></div>
      {D.clientLogos.map((row, r) => (
        <div className="logo-track" key={r}>
          <div className={`logo-row ${r ? 'rev' : ''}`}>
            {[0, 1, 2, 3].flatMap((k) => row.map((l) => (
              <span className="lg" key={k + l.alt} aria-hidden={k > 0}><img src={l.src} alt={k ? '' : l.alt} /></span>
            )))}
          </div>
        </div>
      ))}
    </div>
  )
}

function About() {
  return (
    <section className="cta">
      <div className="wrap cta-grid">
        <Reveal className="cta-photo">
          <div className="cta-blob" />
          <div className="cta-pill"><strong>14+</strong><small>Clients served</small></div>
          <div className="photo-frame"><img src={D.profile.photo} alt="Harender Singh reading" loading="lazy" /></div>
          <div className="float-card"><img src="./img/cmmi.png" alt="" /><div><b>CMMI Associate</b><small>ISACA</small></div></div>
        </Reveal>
        <Reveal delay={120}>
          <div className="eyebrow">About</div>
          <h2>Organisations rarely fail on strategy. <b>They fail on the machinery.</b></h2>
          <p className="why">The governance nobody owns, the process nobody wrote down, the change nobody sustained after the consultants left. That machinery is what I build.</p>
          <p>I go end to end. Diagnose with evidence, not opinion. Design the operating model, the policy, the lifecycle and the governance. Build the capability and the tooling so the client can run it without me. And increasingly, put AI into that machinery where it earns its place, governed, banded and costed.</p>
          <p>That covers transformation programmes, PMO and portfolio functions, policy and SOP architecture, enterprise Agile at scale, CMMI and maturity uplift, Lean Six Sigma and reusable AI accelerators, across banking, development finance, technology and manufacturing.</p>
          <a href="#contact" className="btn btn-pri">Let’s work together <Arrow /></a>
        </Reveal>
      </div>
    </section>
  )
}

function Row({ r }) {
  return (
    <div className={`row ${r.current ? 'current' : ''}`}>
      <div className="org">
        {r.logo ? <img src={r.logo} alt="" /> : r.mono ? <span className="mono">{r.mono}</span> : null}
        <div><h4>{r.org}</h4><div className="role">{r.role}</div></div>
      </div>
      <div className="when"><div className="yr">{r.yr}</div><div className="loc">{r.note}</div></div>
      {r.prog && <div className="prog">{r.prog}</div>}
      {r.text && <div className="more">{r.text}</div>}
      {r.more && (
        <details className="xp more">
          <summary>{r.label}</summary>
          <ul>{r.more.map((m) => <li key={m}>{m}</li>)}</ul>
        </details>
      )}
    </div>
  )
}

function Resume() {
  return (
    <section className="edu tint" id="resume">
      <div className="ghost" aria-hidden="true">Experience</div>
      <div className="wrap">
        <SecHead eyebrow="Education & Work" center>My <b>Education</b> & <b>Work Experience</b></SecHead>
        <div className="edu-grid">
          <Reveal className="edu-col">
            <h3><Icon name="cap" />Education</h3>
            {D.education.map((r) => <Row r={{ ...r, label: 'Highlights' }} key={r.org} />)}
          </Reveal>
          <Reveal className="edu-col" delay={120}>
            <h3><Icon name="bag" />Work Experience</h3>
            {D.experience.map((r) => <Row r={{ ...r, label: 'Key work' }} key={r.org} />)}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Awards() {
  const ref = useRef(null)
  const step = (dir) => {
    const el = ref.current
    const card = el.querySelector('.aw')
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: reduceMotion() ? 'auto' : 'smooth' })
  }
  return (
    <section className="dark" id="awards">
      <div className="ghost" aria-hidden="true">Awards</div>
      <div className="wrap">
        <div className="sec-head center">
          <div>
            <Reveal className="eyebrow">Recognition</Reveal>
            <Reveal as="h2" className="h2" delay={80}>Awards that Speak to <b>My Results</b></Reveal>
            <Reveal as="p" delay={160}>Recognition from employers, clients and evaluators across consulting, IT services and the MBA years.</Reveal>
          </div>
        </div>
        <Reveal className="slider" delay={120}>
          <div className="slides" ref={ref}>
            {D.awards.map((a) => (
              <div className="aw" key={a.title}>
                <div className="stars"><span aria-hidden="true">★★★★★</span><small>{a.tag}</small></div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <div className="by">
                  {a.logo ? <img src={a.logo} alt="" /> : <span className="ph">{a.mono}</span>}
                  <div><b>{a.by}</b><small>{a.when}</small></div>
                </div>
              </div>
            ))}
          </div>
          <div className="s-nav">
            <button onClick={() => step(-1)} aria-label="Previous award">←</button>
            <button onClick={() => step(1)} className="pri" aria-label="Next award">→</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Certs() {
  return (
    <section className="certs" id="certs">
      <div className="ghost" aria-hidden="true">Certified</div>
      <div className="wrap cert-grid">
        <Reveal className="cert-intro">
          <div className="eyebrow">Credentials</div>
          <h2 className="h2">My <b>Certifications</b></h2>
          <p className="muted">Project, process and quality credentials behind the delivery work.</p>
          <div className="cert-ask">
            <h4>Need the full resume?</h4>
            <p>Download a PDF copy with full role history and credentials.</p>
            <a href={D.profile.cv} download="HarenderSingh_CV.pdf" className="btn btn-pri">Download CV <Arrow dir="down" /></a>
          </div>
        </Reveal>
        <Reveal className="cert-card hot" delay={100}>
          <span className="corner" aria-hidden="true">★</span>
          <div className="lbl">Headline</div>
          <div className="big">PMP®</div>
          <div className="sub">Project Management Institute · Aug 2024</div>
          <ul>
            {D.certsHeadline.map((c) => (
              <li key={c.name}>
                {c.logo ? <img src={c.logo} alt="" /> : <span className="tick lg">✓</span>}
                <div><b>{c.name}</b><small>{c.meta}</small></div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="cert-card plain" delay={200}>
          <span className="corner" aria-hidden="true">↗</span>
          <div className="lbl">Supporting</div>
          <div className="big">10+ <small>credentials</small></div>
          <div className="sub">Agile, data, change and AI</div>
          <ul>
            {D.certsSupporting.map(([n, m]) => (
              <li key={n}><span className="tick">✓</span><div><b>{n}</b><small>{m}</small></div></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Ribbon() {
  const line = (words) => [0, 1, 2, 3].flatMap((k) => words.flatMap((w) => [<span key={`${k}${w}`}>{w}</span>, <span key={`${k}${w}s`} className="s">✦</span>]))
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="rb rb-1"><div className="rb-in">{line(D.ribbons[0])}</div></div>
      <div className="rb rb-2"><div className="rb-in">{line(D.ribbons[1])}</div></div>
    </div>
  )
}

function AICorner() {
  return (
    <section className="ai tint" id="ai">
      <div className="ghost" aria-hidden="true">AI Corner</div>
      <div className="wrap">
        <SecHead eyebrow="AI-Driven Transformation" aside={
          <p className="aside">Plenty of people claim AI skills that mean “I use ChatGPT.” My approach is to place every AI idea on a cost-of-ownership spectrum, band it, cost it, govern it, and build at the light-to-middle end myself.</p>
        }>From My <b>AI Corner</b></SecHead>

        <Reveal className="band-wrap">
          <h3>The 6-band AI opportunity spectrum</h3>
          <p>Cost of ownership rises roughly an order of magnitude every two bands, about 300× end to end. The band, not the idea, sets the commitment.</p>
          <div className="bands">
            {D.bands.map((b, i) => (
              <div className="band" key={b.name} style={{ '--i': i }}>
                <div className="bar-slot"><div className="bar" style={{ height: `${22 + i * 15.6}%` }}><span>{i + 1}</span></div></div>
                <b>{b.name}</b>
                <small>{b.what}</small>
                <span className="t">{b.time}</span>
              </div>
            ))}
          </div>
          <div className="band-foot"><span>Light end returns <b>hours</b></span><span>Built at bands 1 to 4 · prototyped at 5 to 6</span><span>Heavy end returns <b>client revenue</b></span></div>
        </Reveal>

        <div className="ai-grid">
          {D.aiCards.map((c, i) => (
            <Reveal as="article" className="ai-card" key={c.title} delay={i * 90}>
              <div className={`ai-top ${c.tone}`}><Icon name={c.icon} strokeWidth="1.6" /><span>{c.tag}</span></div>
              <div className="ai-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="src">{c.chips.map((x) => <span key={x}><i>●</i> {x}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const p = D.profile
  const [note, setNote] = useState({ text: 'Opens your email app with the message ready to send.', err: false })
  const [bad, setBad] = useState([])
  const submit = (e) => {
    e.preventDefault()
    const f = e.currentTarget
    const v = Object.fromEntries(new FormData(f))
    const missing = ['fn', 'ln', 'em', 'sb', 'ms'].filter((k) => !String(v[k] || '').trim())
    if (v.em && !/^\S+@\S+\.\S+$/.test(v.em)) missing.push('em')
    setBad(missing)
    if (missing.length) return setNote({ text: 'Please fill in the highlighted fields.', err: true })
    const body = `${v.ms}\n\n${v.fn} ${v.ln}\n${v.em}${v.ph ? `\n${v.ph}` : ''}`
    window.location.href = `mailto:${p.email}?subject=${encodeURIComponent(v.sb)}&body=${encodeURIComponent(body)}`
    setNote({ text: `Your email app should open now. You can also write to ${p.email} directly.`, err: false })
  }
  const field = (id, label, props = {}) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {props.textarea
        ? <textarea id={id} name={id} className={bad.includes(id) ? 'bad' : ''} />
        : <input id={id} name={id} className={bad.includes(id) ? 'bad' : ''} {...props} />}
    </div>
  )
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <div className="eyebrow">Contact</div>
          <h2 className="h2">Let’s <b>Connect</b> & <b>Collaborate</b></h2>
          <p className="lead">Open to Business Excellence, Program Management and PMO roles, and to conversations about transformation work.</p>
          <ul className="c-list">
            <li><span className="ci"><Icon name="phone" /></span><div><small>Phone</small><a href={p.phoneHref}>{p.phone}</a></div></li>
            <li><span className="ci"><Icon name="mail" /></span><div><small>Email</small><a href={`mailto:${p.email}`}>{p.email}</a></div></li>
            <li><span className="ci"><LinkedInIcon /></span><div><small>LinkedIn</small><a href={p.linkedin} target="_blank" rel="noopener">{p.linkedinLabel}</a></div></li>
            <li><span className="ci"><Icon name="pin" /></span><div><small>Location</small><span>Gurugram, India</span></div></li>
          </ul>
        </Reveal>
        <Reveal as="form" className="form" delay={120} onSubmit={submit} noValidate>
          <div className="two">{field('fn', 'First name *', { autoComplete: 'given-name' })}{field('ln', 'Last name *', { autoComplete: 'family-name' })}</div>
          <div className="two">{field('em', 'Email *', { type: 'email', autoComplete: 'email' })}{field('ph', 'Phone number', { type: 'tel', autoComplete: 'tel' })}</div>
          {field('sb', 'Subject *', { placeholder: 'Role, project or question' })}
          {field('ms', 'Message *', { textarea: true })}
          <button className="btn btn-pri" type="submit">Send message <Arrow /></button>
          <p className={`form-note ${note.err ? 'err' : ''}`} aria-live="polite">{note.text}</p>
        </Reveal>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(-1)
  return (
    <section className="faq tint" id="faq">
      <div className="wrap">
        <SecHead eyebrow="FAQs" center>Questions? <b>Look here.</b></SecHead>
        <div className="faq-list">
          {D.faqs.map(([q, a], i) => (
            <Reveal className={`qa ${open === i ? 'open' : ''}`} key={q} delay={i * 60}>
              <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span className="pm" aria-hidden="true">+</span></button>
              <div className="ans"><div><p>{a}</p></div></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const p = D.profile
  return (
    <footer>
      <div className="wrap">
        <div className="f-top">
          <h2>Let’s <b>Connect</b> there</h2>
          <a href={`mailto:${p.email}`} className="toggle-cta"><span className="knob" /><span className="lbl">Get in touch</span></a>
        </div>
        <div className="f-grid">
          <div>
            <a href="#home" className="logo"><span className="logo-mark">HS</span>{p.name}</a>
            <p>Business Excellence and Transformation consultant. PMO, governance, Agile, CMMI and AI-driven transformation.</p>
            <div className="socials">
              <a href={p.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={`mailto:${p.email}`} aria-label="Email"><Icon name="mail" strokeWidth="2" /></a>
              <a href={p.phoneHref} aria-label="Phone"><Icon name="phone" strokeWidth="2" /></a>
            </div>
          </div>
          <div><h4>Navigation</h4><ul>{D.nav.slice(0, 5).map(([id, l]) => <li key={id}><a href={`#${id}`}>{l === 'AI' ? 'AI Corner' : l}</a></li>)}</ul></div>
          <div><h4>Contact</h4><ul><li><a href={p.phoneHref}>{p.phone}</a></li><li><a href={`mailto:${p.email}`}>{p.email}</a></li><li><a href={p.linkedin} target="_blank" rel="noopener">{p.linkedinLabel}</a></li><li>Gurugram, India</li></ul></div>
          <div><h4>Credentials</h4><ul><li>PMP®, PMI</li><li>Lean Six Sigma Black Belt</li><li>CMMI Associate, ISACA</li><li>MBA, Operations, SIOM</li></ul></div>
        </div>
        <div className="f-bottom"><span>© {new Date().getFullYear()} <b>{p.name}</b>. All rights reserved.</span><span>Business Excellence · Transformation · PMO</span></div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Clients />
        <About />
        <Resume />
        <Awards />
        <Certs />
        <Ribbon />
        <AICorner />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
