import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <div className="landing-page">
      {/* First Row: Header */}
      <motion.div
        className="header"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="logo" variants={containerVariants}>
          BBoy Creative
        </motion.h1>
        <motion.div className="social-links" variants={containerVariants}>
          <a
            href="https://apps.apple.com/us/developer/jon-michael-narvaez/id1246305819"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple
          </a>
          <a
            href="https://www.instagram.com/bboycreative.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/jmcancode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Second Row: Tagline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="tagline">Stylish Software</p>
        <p className="tagline2">Mobile, Web, & Strategy</p>
      </motion.div>

      {/* Third Row: Contact */}
      <motion.div
        className="contact"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p>
          Email: <a href="mailto:hello@bboycreative.com">jm@bboycreative.com</a>
        </p>
      </motion.div>
    </div>
  );
};

export default App;
