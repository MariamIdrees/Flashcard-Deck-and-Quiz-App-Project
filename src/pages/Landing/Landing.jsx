import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Layers3,
  Timer,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => (
  <main className="landing-page" id="top">
    <header className="landing-header">
      <Link className="landing-brand" to="/" aria-label="Recall home">
        <span aria-hidden="true">
          <img className="w-[100px]" src="/recallicon2.jpeg" alt="" />
        </span>
        {/* <span>recall</span> */}
      </Link>

      <nav className="landing-nav" aria-label="Main navigation">
        <a href="#method">The method</a>
        <a href="#features">Why recall</a>
      </nav>

      <Link className="header-link" to="/Mydecks">
        Open your decks <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </header>

    <section className="landing-hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" /> A calmer way to learn
        </p>
        <h1 id="hero-title">
          Make learning
          <br />
          <em>last longer.</em>
        </h1>
        <p className="hero-description">
          Turn what you are studying into quick, satisfying reviews. Recall
          brings your notes back at just the right time, so the important things
          stay with you.
        </p>
        <div className="hero-actions">
          <Link className="primary-action" to="/Mydecks">
            Start with your decks <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="text-action" href="#method">
            See how it works <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-rule" />
          <p>Small sessions. Stronger memory.</p>
        </div>
      </div>

      <div className="hero-art" aria-label="A study session in progress">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=85"
          alt="Open books and handwritten notes on a study desk"
        />
        <div className="photo-caption">
          <span>MAKE SPACE TO THINK</span>
          <span>01 / 03</span>
        </div>
        <div className="review-preview" aria-label="Example flashcard">
          <div className="preview-topline">
            <span className="preview-label">
              <span /> TODAY'S REVIEW
            </span>
            <span className="preview-count">
              03 <i>/ 16</i>
            </span>
          </div>
          <p className="preview-topic">WEB DEVELOPMENT</p>
          <p className="preview-question">What is a closure?</p>
          <div className="preview-divider" />
          <p className="preview-answer">
            A function that remembers the scope where it was created.
          </p>
          <div className="preview-footer">
            <span>Remembered just in time</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>LEARN</span>
          <span>BY</span>
          <span>RECALL</span>
        </div>
      </div>
    </section>

    <section
      className="method-section"
      id="method"
      aria-labelledby="method-title"
    >
      <div className="section-heading">
        <p className="eyebrow">A little, often</p>
        <h2 id="method-title">
          Good study habits,
          <br />
          without the heavy lifting.
        </h2>
      </div>
      <div className="method-list" id="features">
        <article className="method-item">
          <span className="method-icon">
            <Layers3 size={20} aria-hidden="true" />
          </span>
          <div>
            <h3>Keep it in decks</h3>
            <p>
              Organize ideas into focused sets you can come back to anytime.
            </p>
          </div>
          <span className="method-number">01</span>
        </article>
        <article className="method-item">
          <span className="method-icon">
            <Timer size={20} aria-hidden="true" />
          </span>
          <div>
            <h3>Review at the right moment</h3>
            <p>
              Short check-ins help move useful knowledge into long-term memory.
            </p>
          </div>
          <span className="method-number">02</span>
        </article>
        <article className="method-item">
          <span className="method-icon">
            <Brain size={20} aria-hidden="true" />
          </span>
          <div>
            <h3>Notice your progress</h3>
            <p>See what is sticking and give the tricky cards another pass.</p>
          </div>
          <span className="method-number">03</span>
        </article>
      </div>
    </section>

    <footer className="landing-footer">
      <Link className="landing-brand" to="/" aria-label="Recall home">
        <img className="landing-footer-logo" src="/recallicon2.jpeg" alt="" />
      </Link>
      <p>Made for the things worth remembering.</p>
      <Link to="/Mydecks">
        Go to your decks <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </footer>
  </main>
);

export default Landing;
