import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          OM
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/osama-mohamed-a60a31254/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/Osos345"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Osama-Mohamed911?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://gmail.com" target="_blank" rel="noreferrer">
            <FaGoogle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
