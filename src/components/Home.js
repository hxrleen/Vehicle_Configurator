// Home.js
import React, { useState } from "react";
import ConfiguratorContainer from "./ConfiguratorContainer";
import "./Home.css"; // Import additional CSS file for Home page styling

function Home() {
  const [showConfigurator, setShowConfigurator] = useState(false);

  const handleStartBrowsing = () => {
    setShowConfigurator(true);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <img
          src="https://www.jato.com/wp-content/uploads/MicrosoftTeams-image-34.png"
          alt="Automotive Industry"
          className="hero-image"
        />
        <div className="hero-overlay">
          <button
            className="start-browsing-button"
            onClick={handleStartBrowsing}>
            Start Browsing
          </button>
        </div>
      </div>

      {showConfigurator && <ConfiguratorContainer />}

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review-card">
            <img
              src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg"
              alt="Customer 1"
              className="review-image"
            />
            <div className="review-content">
              <h3>Customer 1</h3>
              <div className="star-rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod ligula vel justo sodales, nec tincidunt orci ultricies."
              </p>
            </div>
          </div>

          <div className="review-card">
            <img
              src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg"
              alt="Customer 2"
              className="review-image"
            />
            <div className="review-content">
              <h3>Customer 2</h3>
              <div className="star-rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod ligula vel justo sodales, nec tincidunt orci ultricies."
              </p>
            </div>
          </div>

          <div className="review-card">
            <img
              src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg"
              alt="Customer 3"
              className="review-image"
            />
            <div className="review-content">
              <h3>Customer 3</h3>
              <div className="star-rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod ligula vel justo sodales, nec tincidunt orci ultricies."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
