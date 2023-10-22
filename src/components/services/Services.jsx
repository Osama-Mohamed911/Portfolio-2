import "./services.scss";
import { motion } from "framer-motion";
import { PiCodeSimple, PiDevices } from "react-icons/pi";
import { BsFillLightningFill, BsGear } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="text-container">
        <Fade duration={1000} direction={"left"}>
          <p>
            I focus on helping your brand grow <br />
            and move forward
          </p>
        </Fade>

        <hr />
      </motion.div>
      <motion.div className="title-container">
        <Fade duration={1000} direction={"up"}>
          <div className="title">
            <h1>
              <motion.span whileHover={{ color: "orange" }}>Unique</motion.span>{" "}
              Ideas{" "}
              <motion.span whileHover={{ color: "orange" }}>
                For Your
              </motion.span>{" "}
              Business
            </h1>
          </div>
        </Fade>
        <Fade duration={1000} direction={"up"} delay={300}>
          <button>What I Do?</button>
        </Fade>
      </motion.div>
      <Fade duration={1000} direction={"left"} delay={500}>
        <motion.div className="list-container">
          <motion.div className="box" whileHover={{ scale: "1.1" }}>
            <div className="icon">
              <PiCodeSimple style={{ fontSize: "40px", color: "orange" }} />
            </div>
            <h2 className="box-title">Web Development</h2>
            <p>
              Build high quality websites and dynamic applications to create
              stunning user experiences.
            </p>
          </motion.div>
          <motion.div className="box" whileHover={{ scale: "1.1" }}>
            <div className="icon">
              <BsFillLightningFill
                style={{ fontSize: "40px", color: "orange" }}
              />
            </div>
            <h2 className="box-title">High Performance</h2>
            <p>
              Optimized website to deliver content to visitors as quickly as
              possible.
            </p>
          </motion.div>
          <motion.div className="box" whileHover={{ scale: "1.1" }}>
            <div className="icon">
              <PiDevices style={{ fontSize: "40px", color: "orange" }} />
            </div>
            <h2 className="box-title">Responsive Design</h2>
            <p>
              Design that makes your web content adapt to the different screen
              and window sizes of a variety of devices.
            </p>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: "1.1" }}>
            <div className="icon">
              <BsGear style={{ fontSize: "40px", color: "orange" }} />
            </div>
            <h2 className="box-title">Free Support</h2>
            <p>
              You will have support for your website at any time and from
              anywhere.
            </p>
          </motion.div>
        </motion.div>
      </Fade>
    </motion.div>
  );
};

export default Services;
