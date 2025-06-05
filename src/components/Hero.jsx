import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import { Helmet } from "react-helmet-async";




const Hero = () => (
  <>
    <Helmet>
      <title>Prit Panchal | Full Stack Developer Portfolio</title>
      <meta name="description" content="Explore the portfolio of Prit Panchal, a full stack developer skilled in MERN stack and Spring Boot. Check out projects, skills, and contact info." />
      <meta name="keywords" content="Prit Panchal, Full Stack Developer, MERN stack, Spring Boot, Portfolio, React Developer, Java Developer" />
      <meta name="author" content="Prit Panchal" />

      <meta property="og:title" content="Prit Panchal | Full Stack Developer Portfolio" />
      <meta property="og:description" content="Passionate full stack developer specializing in MERN stack and Java Spring Boot." />
      <meta property="og:image" content="https://prit2504.github.io/portfolio/hero.jpg" />
      <meta property="og:url" content="https://prit2504.github.io/portfolio/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content="Prit Panchal | Full Stack Developer" />
      <meta name="twitter:description" content="Portfolio website of Prit Panchal — explore skills, experience, and projects." />
      <meta name="twitter:image" content="https://prit2504.github.io/portfolio/hero.jpg" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Prit Panchal",
        "url": "https://prit2504.github.io/portfolio/",
        "image": "https://prit2504.github.io/portfolio/hero.jpg",
        "jobTitle": "Full Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelancer"
        },
        "sameAs": [
          "https://github.com/prit2504",
          "https://www.linkedin.com/in/prit-panchal02"
        ],
        "description": "Prit Panchal is a Full Stack Developer skilled in MERN stack and Java Spring Boot, focused on building scalable web applications.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India",
          "addressCountry": "IN"
        }
      }
    `}
      </script>
    </Helmet>
    <section
      aria-label="Introduction Section"
      className="relative flex flex-col-reverse sm:flex-row justify-center items-center min-h-screen px-4 sm:px-8 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200 pt-[70px]"
    >
      <div className="absolute w-40 h-40 bg-yellow-300 rounded-full top-10 left-10 blur-2xl opacity-30 z-0" aria-hidden="true"></div>
      <div className="absolute w-52 h-52 bg-blue-300 rounded-full bottom-10 right-10 blur-2xl opacity-30 z-0" aria-hidden="true"></div>


      <div className="relative z-10 flex flex-col gap-4 max-w-xl text-center sm:text-left sm:mr-8">
        <motion.h2
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-lg sm:text-xl text-gray-300 font-bold"
        >
          Hello, I am
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, x: 140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl text-yellow-400 font-bold leading-tight"
        >
          Prit Panchal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-base sm:text-lg text-gray-300"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-gray-200 font-medium mt-2"
        >
          Passionate about building innovative web applications with MERN stack, Spring Boot, and scalable systems.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="inline-block bg-yellow-400 px-6 py-3 rounded-full text-black shadow-md mt-4 font-semibold hover:bg-yellow-300 transition"
        >
          Hire me!
        </motion.a>

        <motion.p
          initial={{ opacity: 0, x: 140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-4 text-white font-semibold text-lg hover:underline"
        >
          <Link to="/portfolio/about">Click for more</Link>
        </motion.p>
      </div>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="relative z-10 max-w-[200px] sm:max-w-xs"
      >
        <img
          src={heroImg}
          alt="Illustration of Prit Panchal - Full Stack Developer"
          loading="eager"
          fetchpriority="high"
          width={400}
          height={400}
          className="rounded-full shadow-lg object-cover w-full h-auto border-4 border-yellow-300"
          title="Prit Panchal - Full Stack Developer"
        />
      </motion.div>
    </section>
  </>
);

export default Hero;
