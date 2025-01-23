import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <motion.div
      location={location}
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="card__icons">
        <img
          className="card__icons-mongo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
        />

        <img
          className="card__icons-item"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        />

        <img
          className="card__icons-item"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
        />

        <img
          className="card__icons-item"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        />

        <img
          className="card__icons-item"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
        />
      </div>

      <div className="work center">
        <div class="card">
          <div class="card__side card__side--front">
            <img
              src="assets/best.png
          "
              alt="screenshot of"
              className="screenshot-2"
            />
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <ul className="description">
              <li className="card__description-item">React JS</li>
              <li className="card__description-item">
                Integrated Google books and New York Times API's.
              </li>
            </ul>
            <a href="https://bestbooks1.netlify.app/" className="card__button">
              Visit
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card__side card__side--front">
            <img
              src="assets/collector.png
          "
              alt="screenshot of"
              className="screenshot"
            />
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <ul className="description">
              <li className="card__description-item">
                Mongo DB, Express, Node, React.
              </li>
              <li className="card__description-item">
                Integrated multiple art museum API's.
              </li>
              <li className="card__description-item">
                Hosted with Heroku and Netlify.
              </li>
            </ul>
            <a href="https://collector1.netlify.app/" className="card__button">
              Visit
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card__side card__side--front">
            <img
              src="assets/thoughts.png
          "
              alt="screenshot of"
              className="screenshot"
            />
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <ul className="description">
              <li className="card__description-item">
                Mongo DB, Express, Node, React.
              </li>
              <li className="card__description-item">
                User signin with Google auth.
              </li>
              <li className="card__description-item">
                Hosted with Heroku and Netlify.
              </li>
            </ul>
            <a href="https://thoughtpad.netlify.app/" className="card__button">
              Visit
            </a>
          </div>
        </div>
      </div>
      <a className="github-link" href="https://github.com/dbcode1">
        <img
          className="github"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
        />
      </a>
    </motion.div>
  );
};

export default Work;
