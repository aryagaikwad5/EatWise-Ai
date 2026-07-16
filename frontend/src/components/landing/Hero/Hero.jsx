import "./Hero.css";
import { useNavigate } from "react-router-dom";

import apple from "../../../assets/images/apple.png";
import banana from "../../../assets/images/banana.png";
import orange from "../../../assets/images/orange.png";
import grapes from "../../../assets/images/grapes.png";
import kiwi from "../../../assets/images/kiwi.png";
import mango from "../../../assets/images/mango.png";
import pineapple from "../../../assets/images/pineapple.png";
import strawberry from "../../../assets/images/strawberry.png";
import pear from "../../../assets/images/pear.png";

function Hero() {

  const navigate = useNavigate();
  return (
    <section className="hero">

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <img src={apple} className="fruit apple" alt="" />
      <img src={banana} className="fruit banana" alt="" />
      <img src={orange} className="fruit orange" alt="" />
      <img src={grapes} className="fruit grapes" alt="" />
      <img src={kiwi} className="fruit kiwi" alt="" />
      <img src={mango} className="fruit mango" alt="" />
      <img src={pineapple} className="fruit pineapple" alt="" />
      <img src={strawberry} className="fruit strawberry" alt="" />
      <img src={pear} className="fruit pear" alt="" />

      <div className="blur1"></div>
      <div className="blur2"></div>
      <div className="blur3"></div>

      <div className="hero-content">

        <span className="badge">
          AI Powered Fruit Freshness Detection
        </span>

        <h1>
          EatWise AI
        </h1>

        <h2>
          Know Your Fruit
          <br />
          Before You Eat
        </h2>

        <p>
          Upload a fruit image and instantly discover freshness,
          safety, nutrition and smart storage recommendations.
        </p>

        <button
          className="explore-btn"
          onClick={() => navigate("/intro")}
        >
          Explore →
        </button>

      </div>

    </section>
  );
}

export default Hero;