import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../components/PageLayout.jsx";

const TITLE = "ECHOTHINK.AI";
const SHOW_INTRO_DELAY_MS = 3000;

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const introVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2.5 } },
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(true), SHOW_INTRO_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const rainbowTextStyle = {
    background:
      "linear-gradient(90deg,#a3bffa,#8dc6ff,#7abaff,#76a9fa,#5f8ede,#4d79d1,#4267c8,#3b56bd)",
    backgroundSize: "400% 400%",
    animation: "rainbow 6s linear infinite",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            className="intro-text"
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
        <p>
        <span style={rainbowTextStyle}>EchoThink.ai</span> is dedicated to deploying and accelerating large language models on span <span style={rainbowTextStyle}>affordable devices</span>.
        We build intelligent AI agents that provide streamlined pipelines for <span style={rainbowTextStyle}>game asset</span> creation and <span style={rainbowTextStyle}>virtual asset analysis</span> .
        </p>
        <p className="mt-4">
        Our advanced solutions optimize large language model deployment and intelligent agent integration, enabling seamless automation and insightful analysis across gaming and virtual asset domains. This empowers clients to accelerate innovation and make data-driven decisions with confidence.
        </p>
          </motion.div>
        ) : (
          <motion.h1
            key="title"
            className="main-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {TITLE}
          </motion.h1>
        )}
      </AnimatePresence>

      <style>{`
        .main-title {
          font-weight: 800;
          font-size: 4rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0 0 2rem;
          color: #87b9e8;
        }
        .intro-text {
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
          text-align: left;
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>
    </PageLayout>
  );
}
