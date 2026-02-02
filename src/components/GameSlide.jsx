import React, { useState } from "react";

function GameSlide({ game }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="gameSlider">
      <img src={game.img} alt={game.title} />

      <div className={`video ${active ? "active" : ""}`}>
        <iframe
          width="1280"
          height="720"
          src={game.trailer} 
          title={game.title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="content">
        <h2>{game.title}</h2>
        <p>{game.description}</p>

        <div className="buttons">
          <a href="/" className="orderBtn">
            Order Now
          </a>

          <button
            className={`playBtn ${active ? "active" : ""}`}
            onClick={handleToggleVideo}
          >
            <span className="pause">
              <i className="bi bi-pause-fill"></i>
            </span>
            <span className="play">
              <i className="bi bi-play-fill"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameSlide;
