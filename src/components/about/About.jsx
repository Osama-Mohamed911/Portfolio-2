import { Fade } from "react-awesome-reveal";
import "./about.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaReact,
} from "react-icons/fa";

import {
  SiJquery,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <div className="page-title">
        <p>
          About me and <br />
          my skils
        </p>
        <div className="bar"></div>
      </div>
      <div className="clr"></div>
      <div className="container">
        <div className="text-container">
          <h2>Introduction</h2>
          <p>
            Hi , My name is <span>Osama Mohamed</span>. I am a Front-End Web
            Developer and I have a Bachelor Degree in Computer Science. I am
            learning programming since 2016 ,Which gave me good experience about
            Computer Science field.
          </p>
          <ul>
            <li>
              <span>Name :</span>Osama Mohamed
            </li>
            <li>
              <span>Address :</span>129 Emtdad Ramses 2 - Nasrcity
            </li>
            <li>
              <span>Phone :</span>+201060894759
            </li>
            <li>
              <span>Mail :</span>osamaamohammed911@gmail.com
            </li>
          </ul>
          <a href="./Osama Mohamed CV.pdf" download>
            Download CV
          </a>
        </div>

        <div className="wrapper">
          <Fade duration={1000}>
            <div className="title">
              <div className="line"></div>
              <h2>My Skills</h2>
              <div className="line"></div>
            </div>
          </Fade>
          <Fade duration={3000}>
            <div className="skills-container">
              <div className="skill">
                <div className="icon">
                  <FaHtml5 style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>HTML</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <FaCss3Alt style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>CSS</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <FaJs style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <SiTypescript style={{ fontSize: "25px", color: "orange" }} />
                </div>
                <span>TypeScript</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <FaBootstrap style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>BootStrap</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <SiTailwindcss
                    style={{ fontSize: "30px", color: "orange" }}
                  />
                </div>
                <span>Tailwind CSS</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <FaSass style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>SASS</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <FaGitAlt style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>Git</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <FaReact style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>React js</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <SiRedux style={{ fontSize: "25px", color: "orange" }} />
                </div>
                <span>Redux Toolkit</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <SiJquery style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>JQuery</span>
              </div>
              <div className="skill">
                <div className="icon">
                  <SiNextdotjs style={{ fontSize: "30px", color: "orange" }} />
                </div>
                <span>Next js</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
