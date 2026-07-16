import "./CTA.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <motion.section

    className="cta"

    initial={{
    opacity:0,
    scale:.95
    }}

    whileInView={{
    opacity:1,
    scale:1
    }}

    transition={{
    duration:.8
    }}

    viewport={{once:true}}

    >

      <span className="section-tag">
        🚀 Ready to Experience AI?
      </span>

      <h2>
        Scan Smarter.
        <br />
        Eat Healthier.
      </h2>

      <p>
        EatWise AI helps you identify fruit freshness, discover nutrition,
        and receive smart storage recommendations in seconds.
      </p>

      <div className="stats">

        <div className="stat">
          <h3>95%+</h3>
          <span>Prediction Accuracy</span>
        </div>

        <div className="stat">
          <h3>2 Sec</h3>
          <span>AI Analysis</span>
        </div>

        <div className="stat">
          <h3>100%</h3>
          <span>Private Scans</span>
        </div>

        <div className="stat">
          <h3>24/7</h3>
          <span>Available Anytime</span>
        </div>

      </div>

      <button
        className="cta-btn"
        onClick={() => navigate("/predict")}
      >
        Start Scanning →
      </button>

    </motion.section>
  );
}

export default CTA;