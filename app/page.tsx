import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Grainy Forever.</h1>
          <p>Grainy animated blob for your modern website.</p>
          <div className="buttons">
            <a
              className="button primary"
              href="https://dribbble.com/shots/21248617-Daily-Design-Code-3-Grainy-Gradients-Blurry-Background"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Design
            </a>
            <a
              className="button secondary"
              href="https://twitter.com/juxtopposed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stay Tuned
            </a>
          </div>
        </div>
        <div className="blob-cont">
          <div className="yellow blob"></div>
          <div className="red blob"></div>
          <div className="green blob"></div>
        </div>
      </div>

      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>

      {/* Not required */}
      <a
        href="https://www.youtube.com/watch?v=_ZFghigBmqo"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube"
      >
        Watch on YouTube
      </a>
    </>
  );
}
