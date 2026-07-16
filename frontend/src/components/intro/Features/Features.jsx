import "./Features.css";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI Freshness Detection",
    text: "Identify whether your fruit is fresh or rotten using Artificial Intelligence.",
  },
  {
    icon: "🥗",
    title: "Nutrition Insights",
    text: "Instantly discover vitamins, minerals and health benefits.",
  },
  {
    icon: "❄️",
    title: "Storage Guide",
    text: "Know the best way to store every fruit and extend freshness.",
  },
  {
    icon: "⚡",
    title: "Instant Results",
    text: "Upload once and receive predictions within seconds.",
  },
];

function Features() {
  return (
    <motion.section

    className="features"

    initial={{opacity:0,y:60}}

    whileInView={{opacity:1,y:0}}

    transition={{
    duration:.8
    }}

    viewport={{once:true}}

    >

      <span className="section-tag">
        🍏 Features
      </span>

      <h2>
        Why Choose
        <span> EatWise AI?</span>
      </h2>

      <p>
        Everything you need to make healthier and smarter food choices,
        powered by Artificial Intelligence.
      </p>

      <div className="feature-grid">

        {features.map((item, index) => (

        <motion.div

          key={index}

          className="feature-card"

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          transition={{
          delay:index*.15,
          duration:.5
          }}

          viewport={{once:true}}

          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}

export default Features;