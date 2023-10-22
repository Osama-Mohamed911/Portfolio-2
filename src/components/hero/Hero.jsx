import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>OSAMA MOHAMED</motion.h2>
          <motion.h1 variants={textVariants}>
            Front-End Developer And Freelancer.
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See My Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            src="/public/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <div className="image-container">
        <img src="./hero.webp" alt="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
