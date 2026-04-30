import { Link } from "react-router-dom";
import { Microscope, Globe, Atom } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      
      <section className="hero-section">
        <h1 className="hero-title">
          Unveiling the <span className="hero-highlight">Scientific Revolutions</span>
        </h1>
        <p className="hero-description">
          Journey through time and discover the breakthroughs that changed our understanding of the universe forever.
        </p>
        <div className="hero-buttons">
          <Link to="/cards">
            <button className="btn-primary">Explore All Cards</button>
          </Link>
          <Link to="/explore">
            <button className="btn-secondary">Explore More</button>
          </Link>
        </div>
      </section>

      
      <section className="features-section">

        <div className="feature-card">
          <div className="feature-icon blue">
            <Microscope size={32} />
          </div>
          <h3>Discovery</h3>
          <p>From the smallest atoms to the vastest galaxies, explore how we discovered the unknown.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon green">
            <Globe size={32} />
          </div>
          <h3>Impact</h3>
          <p>Understand how scientific breakthroughs reshaped society, culture, and our daily lives.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon purple">
            <Atom size={32} />
          </div>
          <h3>Future</h3>
          <p>See how past revolutions pave the way for the next generation of scientific wonders.</p>
        </div>

      </section>

    </div>
  );
};

export default Home;