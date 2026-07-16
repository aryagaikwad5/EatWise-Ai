import "./HowItWorks.css";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "📷",
    title: "Upload Fruit",
    desc: "Take or upload a clear image of any supported fruit.",
  },
  {
    number: "02",
    icon: "🤖",
    title: "AI Analysis",
    desc: "Our deep learning model detects freshness with high accuracy.",
  },
  {
    number: "03",
    icon: "🍏",
    title: "View Results",
    desc: "Know whether the fruit is fresh, overripe or spoiled.",
  },
  {
    number: "04",
    icon: "🥗",
    title: "Health Insights",
    desc: "Get nutrition facts, health benefits and consumption advice.",
  },
  {
    number: "05",
    icon: "❄️",
    title: "Storage Tips",
    desc: "Receive smart storage recommendations to keep fruits fresh longer.",
  },
];

function HowItWorks() {
  return (
    <motion.section

    className="how"

    initial={{opacity:0}}

    whileInView={{opacity:1}}

    transition={{duration:.8}}

    viewport={{once:true}}

    >

      <span className="section-tag">
        ⚙️ How It Works
      </span>

      <h2>
        Just <span>5 Simple Steps</span>
      </h2>

      <p>
        Scan your fruit in seconds and let AI provide everything you need to know.
      </p>

      <div className="timeline">

        {steps.map((step, index) => (

        <motion.div

          key={index}

          className="step-card"

          initial={{
          opacity:0,
          scale:.8
          }}

          whileInView={{
          opacity:1,
          scale:1
          }}

          transition={{
          delay:index*.15,
          duration:.45
          }}

          viewport={{once:true}}

          >
            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}

export default HowItWorks;