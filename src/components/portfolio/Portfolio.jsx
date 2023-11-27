import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
  const items = [
    {
      id: 7,
      title: "DealDazzle e-commerce",
      image: "./dealdazzle.png",
      desc: " E-commerce responsive web application with cart and wishlist and payment feature. ",
      tools: [
        {
          id: 41,
          name: "Next js",
        },
        {
          id: 42,
          name: "TailwindCSS",
        },
        {
          id: 43,
          name: "TypeScript",
        },
        {
          id: 45,
          name: "Redux-Toolkit",
        },
        {
          id: 44,
          name: "Stripe",
        },
      ],
      href: "https://deal-dazzle.vercel.app/",
    },
    {
      id: 1,
      title: "The Moviez Lab",
      image: "./themoviezlab.png",
      desc: "Movie web app with adding to watch list feature , and it is fully responsive",
      tools: [
        {
          id: 1,
          name: "React js",
        },
        {
          id: 2,
          name: "React-router-dom",
        },
        {
          id: 3,
          name: "BootStrap",
        },
        {
          id: 19,
          name: "TMDB API",
        },
      ],
      href: "https://the-moviez-lab-app.vercel.app/",
    },
    {
      id: 2,
      title: "Echo Project",
      image: "./echo.png",
      desc: "Echo is a responsive web hosting website template",
      tools: [
        {
          id: 4,
          name: "HTML",
        },
        {
          id: 5,
          name: "CSS",
        },
        {
          id: 6,
          name: "JavaScript",
        },
        {
          id: 20,
          name: "JQuery",
        },
      ],
      href: "https://osama-mohamed911.github.io/Echo/",
    },
    {
      id: 3,
      title: "IT Host",
      image: "./it host.png",
      desc: "IT Host is a responsive web hosting website template",
      tools: [
        {
          id: 6,
          name: "HTML",
        },
        {
          id: 7,
          name: "Bootstrap",
        },
        {
          id: 8,
          name: "JQuery",
        },
      ],
      href: "https://osama-mohamed911.github.io/IT-Host-/",
    },
    {
      id: 4,
      title: "LLdy Project",
      image: "./lldy.png",
      desc: "LLdy is a responsive web hosting website template",
      tools: [
        {
          id: 9,
          name: "HTML",
        },
        {
          id: 10,
          name: "CSS",
        },
      ],
      href: "https://osama-mohamed911.github.io/LLdy-project/",
    },
    {
      id: 5,
      title: "Shapley Project",
      image: "./shelpy.png",
      desc: "Shapleyis a responsive web hosting website template",
      tools: [
        {
          id: 12,
          name: "HTML",
        },
        {
          id: 13,
          name: "CSS",
        },
      ],
      href: "https://osama-mohamed911.github.io/Shapely/",
    },
    {
      id: 6,
      title: "Plumber project",
      image: "./plumber.png",
      desc: "Plumber is a responsive web hosting website template",
      tools: [
        {
          id: 15,
          name: "HTML",
        },
        {
          id: 16,
          name: "CSS",
        },
        {
          id: 17,
          name: "JavaScript",
        },
        {
          id: 22,
          name: "JQuery",
        },
      ],
      href: "https://osama-mohamed911.github.io/Plumper/",
    },
  ];
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const Singel = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <img src={item.image} alt={item.title} ref={ref} />
            <motion.div className="text-container" style={{ y }}>
              <h2>{item.title}</h2>
              <ul>
                {item && item.tools
                  ? item.tools.map((g) => (
                      <>
                        <li id={g.id}>{g.name}</li>
                      </>
                    ))
                  : ""}
              </ul>
              <p>{item.desc}</p>
              <motion.a
                whileHover={{ backgroundColor: "black", color: "orange" }}
                href={item.href}
                target="_blank"
              >
                See Demo
                <FiExternalLink style={{ marginLeft: "10px" }} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>

      {items.map((item) => (
        <Singel item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
