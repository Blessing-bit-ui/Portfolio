import { useRef, useState } from 'react'
import './App.css'
import welcome from './assets/Group 8.png'
import dashboard from './assets/iPhone 16 & 17 Pro Max - 10.png'
import onboarding from './assets/iPhone 16 & 17 Pro Max - 13.png'
import directory from './assets/Screenshot 2026-10-14 073300.png'
import moneyContact from './assets/Screenshot 2026-10-15 192857.png'
import moneyBenefits from './assets/Screenshot 2026-10-15 192919.png'
import moneySavings from './assets/Screenshot 2026-10-15 193015.png'
import refine from './assets/WhatsApp Image 2026-09-07 at 5.51.38 PM.jpeg'
import fashion from './assets/WhatsApp Image 2026-09-07 at 5.54.39 PM.jpeg'
import woman from './assets/WhatsApp Image 2026-09-10 at 2.11.11 PM.jpeg'
import creativity from './assets/WhatsApp Image 2026-09-16 at 5.34.51 PM.jpeg'
import steps from './assets/WhatsApp Image 2026-10-02 at 7.24.38 PM.jpeg'

const pieces = [
  { image: refine, title: 'Refine / Boss', type: 'Fashion editorial' },
  { image: woman, title: 'Today’s woman', type: 'Editorial design' },
  { image: steps, title: 'Big steps', type: 'Promotional design' },
  { image: fashion, title: 'A study in red', type: 'Visual exploration' },
  { image: creativity, title: 'Monetize your creativity', type: 'Promotional design' },
]

function App() {
  const dialog = useRef(null)
  const [selected, setSelected] = useState(null)
  function openImage(image, title) {
    setSelected({ image, title })
    dialog.current.showModal()
  }
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#">yembe<span>•</span></a>
        <nav aria-label="Main navigation"><a href="#work">Selected work ↗</a><a href="#about">About ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero wrap">
          <p className="hero-greeting">Hi, I'm Blessing <span role="img" aria-label="waving hand">👋</span></p>
          <h1 className="intro-title">Web Developer <span>&amp; Product Designer</span></h1>
          <div className="hero-copy">
            <p className="hero-lead">I design and develop digital products, transforming ideas into functional, intuitive, and user-centred experiences.</p>
            <p>With a passion for technology, creativity, and problem-solving, I combine web development, UX design, and business thinking to build meaningful digital solutions.</p>
          </div>
          <div className="hero-actions"><a className="primary-link" href="#work">View My Projects <span aria-hidden="true">↗</span></a><a className="text-link" href="#connect">Let's Connect <span aria-hidden="true">↗</span></a></div>
        </section>
        <section className="work wrap" id="work">
          <div className="section-heading"><h2>Selected work</h2><span>01 — 03 / DIGITAL EXPERIENCES</span></div>

          <article className="project">
            <div className="fitness-stage">
              <div className="stage-label"><span>FITBUDDY</span><span>MOVE WITH PURPOSE ↗</span></div>
              <div className="phone-lineup">
                {[{ image: welcome, title: 'FitBuddy welcome screen' }, { image: dashboard, title: 'FitBuddy dashboard' }, { image: onboarding, title: 'FitBuddy fitness goals onboarding' }].map(({ image, title }) => (
                  <button className="phone" key={title} onClick={() => openImage(image, title)} aria-label={`Enlarge ${title}`}><img src={image} alt={title} /></button>
                ))}
              </div>
              <span className="stage-note">A little motivation. A lot of movement.</span>
            </div>
            <div className="project-caption"><div><h3>FitBuddy</h3><p>A mobile fitness experience, from first steps to daily movement.</p></div><span className="tag">Mobile app · UI design</span></div>
          </article>
          <article className="project">
            <button className="directory-stage" onClick={() => openImage(directory, 'African business directory')} aria-label="Enlarge African business directory design">
              <div className="stage-label"><span>AFRICAN BUSINESS DIRECTORY</span><span>DISCOVER. CONNECT. ↗</span></div>
              <img src={directory} alt="African business directory website featuring a map of Africa and a business search" loading="lazy" />
            </button>
            <div className="project-caption"><div><h3>African business directory</h3><p>A digital space for discovery and connection.</p></div><span className="tag">Web design</span></div>
          </article>
          <article className="project money-project">
            <div className="money-stage">
              <div className="stage-label"><span>MONEY PLANNER</span><span>WEBSITE / SELECTED SCREENS</span></div>
              <button className="website-preview" onClick={() => openImage(moneySavings, 'Money Planner — savings guidance')} aria-label="Enlarge Money Planner savings page">
                <span className="browser-bar" aria-hidden="true"><span>● ● ●</span><span>Money Planner / Savings</span><span>↗</span></span>
                <img src={moneySavings} alt="Money Planner savings page with savings guidance and related topics" loading="lazy" />
              </button>
              <div className="website-details">
                {[{ image: moneyBenefits, title: 'Benefits', description: 'Money Planner benefits page with information cards for different circumstances' }, { image: moneyContact, title: 'Contact', description: 'Money Planner contact page with support information and topic navigation' }].map(({ image, title, description }) => (
                  <button key={title} onClick={() => openImage(image, `Money Planner — ${title}`)} aria-label={`Enlarge Money Planner ${title.toLowerCase()} page`}><img src={image} alt={description} loading="lazy" /><span>{title} <span aria-hidden="true">↗</span></span></button>
                ))}
              </div>
            </div>
            <div className="project-caption"><div><h3>Money Planner</h3><p>A financial information website covering benefits, savings, and everyday money.</p></div><span className="tag">Website</span></div>
          </article>
        </section>
        <section className="visual-section">
          <div className="wrap">
            <div className="section-heading"><h2>Beyond the interface</h2><span>VISUAL DESIGN / EXPLORATIONS</span></div>
            <p className="section-intro">A different canvas. The same curiosity.</p>
            <div className="visual-grid">{pieces.map((piece) => <figure key={piece.title}><button onClick={() => openImage(piece.image, piece.title)} aria-label={`Enlarge ${piece.title}`}><img src={piece.image} alt={piece.title} loading="lazy" /><span className="image-arrow" aria-hidden="true">↗</span></button><figcaption><h3>{piece.title}</h3><p>{piece.type}</p></figcaption></figure>)}</div>
          </div>
        </section>
        <section className="about wrap" id="about">
          <p className="eyebrow">DESIGN, DEVELOPMENT & CURIOSITY</p>
          <div className="about-story">
            <h2>A Little <em>About Me</em></h2>
            <p>I'm Blessing, a Web Developer and Product Designer passionate about building digital products that solve real-world problems.</p>
            <p>My journey began with web development, where I developed a strong interest in turning ideas into functional applications. As I continued building, I became increasingly curious about the people behind the products: who they are, what they need, and how technology can make their experiences better.</p>
            <p>This curiosity led me to pursue a Master's degree in User Experience Design at the University of Brighton.</p>
            <p>I also hold a Master's degree in International Business and Management from the University of Portsmouth, which gives me a broader perspective on how digital products create value for both users and businesses.</p>
            <p>I enjoy working across the product development process, from understanding user needs and designing interfaces to developing front-end experiences, building APIs, and working with databases.</p>
            <p>Beyond coding, I enjoy graphic design, exploring new technologies, sharing knowledge, and continuously challenging myself to learn something new.</p>
            <p className="about-closing">For me, building digital products isn't just about writing code or creating beautiful designs. It's about bringing ideas to life and creating something useful.</p>
          </div>
        </section>
        <section className="connect wrap" id="connect" aria-labelledby="connect-heading">
          <p className="eyebrow">HAVE AN IDEA IN MIND?</p>
          <h2 id="connect-heading">Let's <em>Connect</em></h2>
          <p>Let's talk about digital products, design, and bringing ideas to life.</p>
          <div className="contact-links">
            <a className="primary-link" href="mailto:yembeblessing27@gmail.com">Email Me <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/yembe-blessing" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
            <a className="text-link" href="https://github.com/Blessing-bit-ui" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <a className="contact-email" href="mailto:yembeblessing27@gmail.com">yembeblessing27@gmail.com</a>
        </section>
      </main>
      <footer className="wrap"><a className="wordmark" href="#">yembe<span>•</span></a><p>Digital experiences. Visual stories.</p><a href="#">Back to top ↑</a></footer>
      <dialog ref={dialog} className="image-dialog" aria-labelledby="image-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close() }}>
        <div className="dialog-toolbar"><p id="image-title">{selected?.title}</p><button onClick={() => dialog.current.close()} autoFocus aria-label="Close image viewer">Close ×</button></div>
        {selected && <img src={selected.image} alt={selected.title} />}
      </dialog>
    </>
  )
}
export default App


