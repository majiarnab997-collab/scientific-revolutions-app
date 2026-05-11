import { Link } from "react-router-dom";
import {
  Microscope,
  Globe,
  Atom,
  Telescope,
  BrainCircuit,
  FlaskConical,
} from "lucide-react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="hero-title">
          Unveiling the{" "}
          <span className="hero-highlight">
            Scientific Revolutions
          </span>
        </h1>

        <p className="hero-description">
          Explore the discoveries, inventions, and revolutionary ideas that
          transformed humanity’s understanding of science, technology, space,
          medicine, and the universe.
        </p>

        <div className="hero-buttons">
          <Link to="/cards">
            <button className="btn-primary">
              Explore All Cards
            </button>
          </Link>

          <Link to="/explore">
            <button className="btn-secondary">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-card">
          <h2>Why This Platform?</h2>

          <p>
            Scientific Revolutions is designed to help users learn about the
            major scientific breakthroughs that shaped modern civilization.
            From astronomy and physics to biology and chemistry, this platform
            provides a clean and interactive experience for discovering
            scientific history.
          </p>

          <p>
            Users can browse cards, search discoveries, explore additional
            resources, and learn how scientific innovations changed the world.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">

        <div className="feature-card">
          <div className="feature-icon blue">
            <Microscope size={34} />
          </div>

          <h3>Discovery</h3>

          <p>
            From atoms to galaxies, discover the scientists and experiments
            that revealed the mysteries of the universe.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon green">
            <Globe size={34} />
          </div>

          <h3>Global Impact</h3>

          <p>
            Learn how scientific revolutions transformed medicine,
            communication, transportation, and everyday life across the world.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon purple">
            <Atom size={34} />
          </div>

          <h3>Future Innovation</h3>

          <p>
            Understand how past discoveries inspire modern technologies such as
            artificial intelligence, quantum computing, and space exploration.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon orange">
            <Telescope size={34} />
          </div>

          <h3>Space Exploration</h3>

          <p>
            Explore humanity’s journey beyond Earth through revolutionary space
            missions, telescopes, and astronomical discoveries.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon red">
            <BrainCircuit size={34} />
          </div>

          <h3>Scientific Thinking</h3>

          <p>
            Understand how critical thinking, observation, and experimentation
            became the foundation of modern scientific methods.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon cyan">
            <FlaskConical size={34} />
          </div>

          <h3>Experiments & Research</h3>

          <p>
            Dive into groundbreaking experiments and research that changed the
            course of science forever.
          </p>
        </div>

      </section>

      {/* EXTRA INFO SECTION */}
      <section className="info-section">

        <div className="info-card">
          <h2>Interactive Learning Experience</h2>

          <p>
            This application provides an engaging way to learn through visual
            scientific cards, detailed information, and exploration-based
            navigation.
          </p>
        </div>

        <div className="info-card">
          <h2>Explore Trusted Resources</h2>

          <p>
            The Explore section allows users to discover additional scientific
            information from reliable external sources similar to a
            Wikipedia-style experience.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Home;