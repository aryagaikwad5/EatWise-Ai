import "./Hero.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();


  return (
    <motion.section
    className="introHero"

    initial={{opacity:0,y:80}}

    whileInView={{opacity:1,y:0}}

    transition={{
    duration:.8,
    ease:"easeOut"
    }}

    viewport={{once:true}}
    >

      <span className="introBadge">
        🍏 Welcome to EatWise AI
      </span>

      <h1>
        Smarter Food Choices <br />
        Powered by Artificial Intelligence
      </h1>

      <p>
        EatWise AI helps you identify fruit freshness, discover nutritional
        value, receive storage recommendations, and make healthier decisions —
        all from a single image.
      </p>

      

    </motion.section>
  );
}

export default Hero;