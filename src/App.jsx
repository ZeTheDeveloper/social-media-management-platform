import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, Play, Sparkles, X } from 'lucide-react'
import './App.css'

const services = [
  { number: '01', title: 'Strategy & direction', copy: 'A clear point of view, a sharper voice, and a social plan built around what makes your brand matter.' },
  { number: '02', title: 'Content that moves', copy: 'Scroll-stopping creative, thoughtful copy, and a reliable publishing rhythm that keeps your audience close.' },
  { number: '03', title: 'Community & growth', copy: 'We show up in the comments, find the right people, and turn attention into a community that lasts.' },
]

const work = [
  { name: 'Aster House', type: 'Hospitality / Instagram', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', stat: '+184% reach', color: 'coral' },
  { name: 'Morrow Objects', type: 'Design studio / Instagram', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85', stat: '3.2x saves', color: 'yellow' },
  { name: 'Olive & Row', type: 'Food & drink / TikTok', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85', stat: '+62k followers', color: 'blue' },
]

const faqs = [
  ['Who do you work with?', 'We work with ambitious companies, founders, and creators who want their social presence to feel as considered as the rest of their brand.'],
  ['Do you only manage Instagram?', 'No. We build the right channel mix for your audience, from Instagram and TikTok to LinkedIn and emerging platforms.'],
  ['How do we get started?', 'Start with a short intro call. We will learn what you are building, share where we see the biggest opportunities, and shape a simple next step.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo" href="#top" onClick={closeMenu}><span><Sparkles size={15} /></span> pulseboard</a>
        <nav className={menuOpen ? 'site-nav open' : 'site-nav'}>
          <a href="#services" onClick={closeMenu}>What we do</a><a href="#work" onClick={closeMenu}>Our work</a><a href="#process" onClick={closeMenu}>Our approach</a><a href="#faq" onClick={closeMenu}>FAQ</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <main id="top">
        <section className="hero-section"><div className="hero-copy"><p className="kicker"><i /> Social, with substance.</p><h1>Make your brand <em>impossible</em> to scroll past.</h1><p className="hero-lede">Pulseboard is the social media partner for companies and creators ready to show up with more clarity, character, and consistency.</p><div className="hero-actions"><a className="primary-button" href="#contact">Start a conversation <ArrowUpRight size={17} /></a><a className="play-link" href="#work"><span><Play size={12} fill="currentColor" /></span> See our latest work</a></div><div className="hero-proof"><div className="proof-avatars"><span>AK</span><span>JM</span><span>RS</span><b>+</b></div><p><strong>Trusted by 40+ growing brands</strong><br />from first post to full presence.</p></div></div><div className="hero-art"><div className="art-note">Good things<br />happen here <span>↘</span></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1100&q=85" alt="Friends sharing a creative moment" /></div><div className="art-sticker">SOCIAL<br /><strong>DONE<br />RIGHT</strong><small>✦ 2025 ✦</small></div><div className="art-caption">People remember<br />how you made<br />them feel.</div></div></section>
        <section className="marquee" aria-label="Our services"><div>Strategy <span>✦</span> Content <span>✦</span> Community <span>✦</span> Growth <span>✦</span> Strategy <span>✦</span> Content <span>✦</span> Community <span>✦</span> Growth <span>✦</span></div></section>
        <section className="services-section section-pad" id="services"><div className="section-intro"><p className="kicker"><i /> What we do</p><h2>The whole picture,<br /><em>beautifully managed.</em></h2><p className="section-lede">You have a business to build. We make sure the world sees the good stuff, in the right places, at the right time.</p></div><div className="service-list">{services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowUpRight className="service-arrow" size={21} /></article>)}</div></section>
        <section className="work-section section-pad" id="work"><div className="section-bar"><div><p className="kicker"><i /> Selected work</p><h2>A few things<br /><em>we are proud of.</em></h2></div><a className="under-link" href="#contact">View all work <ArrowUpRight size={15} /></a></div><div className="work-grid">{work.map((item) => <a className={`work-card ${item.color}`} href="#contact" key={item.name}><div className="work-image"><img src={item.image} alt={`${item.name} project`} /><span className="work-stat">{item.stat}</span></div><div className="work-meta"><div><h3>{item.name}</h3><p>{item.type}</p></div><ArrowUpRight size={19} /></div></a>)}</div></section>
        <section className="quote-section"><div className="quote-mark">“</div><blockquote>They took us from posting because we should to posting because we <em>want</em> to. Our whole brand feels more alive.</blockquote><div className="quote-by"><span>ML</span><p><strong>Maya Lin</strong><br />Founder, Morrow Objects</p></div></section>
        <section className="process-section section-pad" id="process"><div className="section-intro"><p className="kicker"><i /> How it works</p><h2>A good process<br /><em>makes good work.</em></h2></div><div className="process-steps"><div><span>01</span><h3>Find the signal</h3><p>We learn your world, your audience, and the little things that make your brand yours.</p></div><div><span>02</span><h3>Build the rhythm</h3><p>We turn the strategy into a living content system your audience can feel.</p></div><div><span>03</span><h3>Make it matter</h3><p>We publish, listen, learn, and keep making the work more effective every month.</p></div></div></section>
        <section className="faq-section section-pad" id="faq"><div className="section-intro"><p className="kicker"><i /> Good to know</p><h2>Questions,<br /><em>answered.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>
        <section className="contact-section" id="contact"><div className="contact-decoration">✦</div><p className="kicker"><i /> Your next chapter</p><h2>Ready to make<br /><em>some noise?</em></h2><p>Tell us a little about what you are building. We will take it from there.</p><a className="primary-button light" href="mailto:hello@pulseboard.studio">hello@pulseboard.studio <ArrowUpRight size={17} /></a><div className="contact-foot"><span>Based everywhere, working anywhere.</span><span>Instagram&nbsp; ◌ &nbsp;LinkedIn&nbsp; ◌</span></div></section>
      </main>
      <footer><a className="logo" href="#top"><span><Sparkles size={14} /></span> pulseboard</a><p>Social media, with a point of view.</p><small>© 2025 Pulseboard Studio</small></footer>
    </div>
  )
}

export default App
