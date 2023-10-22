import "./contact.scss";
import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30xod6h",
        "template_uf80z08",
        formRef.current,
        "8C_fYnY4ZQa2Y4dtX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Let’s Work together </motion.h1>
        <motion.div className="item" variants={variants}>
          <CiMail style={{ fontSize: "25px", color: "orange" }} />
          <h2>Mail</h2>
          <span>osamaamohammed911@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <CiLocationOn style={{ fontSize: "25px", color: "orange" }} />
          <h2>Address</h2>
          <span>NasrCity, Cairo</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <CiPhone style={{ fontSize: "25px", color: "orange" }} />
          <h2>Phone</h2>
          <span>+201060894759</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.div
          className="contact-svg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#ffa500"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M14.87 32a17.67 17.67 0 0 1 0-25"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M20 26.87a10.41 10.41 0 0 1 0-14.71"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2"
              ></motion.path>
              <line x1="39" y1="52" x2="41" y2="52"></line>
              <line x1="36" y1="20" x2="44" y2="20"></line>
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" placeholder="Name" required name="name" />
          <input type="email" placeholder="Email" required name="email" />
          <textarea rows="8" placeholder="Message" name="message" />
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
