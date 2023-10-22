import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidbar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setopen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setopen={setopen} />
    </motion.div>
  );
};

export default Sidebar;
