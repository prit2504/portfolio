import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
  let myEduDiv = "m-1 p-2 text-sm font-bold";

  const aboutArray = [
    "Hi, I'm Prit — a Full Stack Developer currently in the final year of my Information Technology degree. I enjoy building complete web applications, from crafting clean and interactive user interfaces to developing efficient backend systems. My passion lies in turning ideas into real, usable digital experiences.",
    "During my journey so far, I’ve worked on several personal and academic projects where I’ve taken care of both frontend and backend development. These experiences helped me understand how every part of a web app connects, and I genuinely enjoy solving problems, writing scalable code, and improving user experience.",
    "Right now, I’m actively looking for opportunities where I can grow as a developer, contribute to real-world projects, and collaborate with experienced teams. I’m also open to working on freelance or collaborative projects — whether it's from clients, students, startups, or small businesses — and I’d love to help bring their ideas to life through clean, reliable code."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paginate = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = aboutArray.length - 1;
      if (newIndex >= aboutArray.length) newIndex = 0;
      return newIndex;
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
      width: '100%',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
      width: '100%',
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
      width: '100%',
    }),
  };

  const [direction, setDirection] = useState(0);

  const handlePaginate = (dir) => {
    setDirection(dir);
    paginate(dir);
  };

  const containerMinHeight = '8rem';

  return (
    <>
      <Helmet>
        <title>About | Prit Panchal - Full Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Prit Panchal — a passionate Full Stack Developer skilled in MERN Stack and Spring Boot. Discover his background, education, and professional goals."
        />
        <meta
          name="keywords"
          content="Prit Panchal, Full Stack Developer, MERN, React, Node, Spring Boot, Portfolio, About, IT Student"
        />
        <meta name="author" content="Prit Panchal" />

        <meta property="og:title" content="About | Prit Panchal - Full Stack Developer" />
        <meta
          property="og:description"
          content="Learn more about Prit Panchal — a Full Stack Developer with a strong foundation in MERN and Spring Boot."
        />
        <meta property="og:image" content="https://prit2504.github.io/portfolio/hero.jpg" />
        <meta property="og:url" content="https://prit2504.github.io/portfolio/about" />
        <meta property="og:type" content="profile" />

        <meta name="twitter:title" content="About | Prit Panchal - Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Detailed background and journey of Prit Panchal as a Full Stack Developer."
        />
        <meta name="twitter:image" content="https://prit2504.github.io/portfolio/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Prit Panchal",
            "url": "https://prit2504.github.io/portfolio/about",
            "image": "https://prit2504.github.io/portfolio/hero.jpg",
            "jobTitle": "Full Stack Developer",
            "description": "Final year IT student with strong MERN and Java Spring Boot skills, open to job and freelance opportunities.",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Sardar Vallabh Bhai Patel Institute Of Technology"
            },
            "sameAs": [
              "https://github.com/prit2504",
              "https://www.linkedin.com/in/prit-panchal02"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "India",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='h-full p-4 flex flex-col items-center pt-[65px]'
      >
        <div className='w-full relative'>
          <h1 className='text-2xl text-center mb-3 text-yellow-400 font-bold'>About Me</h1>
          <Link to={'/portfolio/'}>
            <i className="absolute top-0 ml-5 text-4xl fa fa-chevron-circle-left" aria-hidden="true"></i>
          </Link>
          <Link to={'/portfolio/skills'}>
            <i className="absolute top-0 right-0 mr-5 fa fa-chevron-circle-right text-4xl cursor-pointer duration-300 hover:scale-110" aria-hidden="true"></i>
          </Link>
        </div>
        <div
          className='flex flex-col justify-between items-center w-[90%] h-[100%] bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30 relative overflow-hidden p-4'
          style={{ minHeight: containerMinHeight }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.p
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.5 }}
              className='text-[12px] text-justify min-h-[60%] overflow-y-auto'
            >
              {aboutArray[currentIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Buttons */}
          <div className='flex justify-center items-center gap-4 mt-3 w-full'>
            <button
              onClick={() => handlePaginate(-1)}
              className='px-3 py-1 rounded-lg bg-yellow-500 text-black'
            >
              Prev
            </button>
            <button
              onClick={() => handlePaginate(1)}
              className='px-3 py-1 rounded-lg bg-yellow-500 text-black'
            >
              Next
            </button>
          </div>

          {/* Position bar */}
          <div className='w-full h-2 bg-yellow-300 rounded-full mt-2'>
            <motion.div
              className='h-2 bg-yellow-600 rounded-full'
              style={{ width: `${((currentIndex + 1) / aboutArray.length) * 100}%` }}
              layout
            />
          </div>
        </div>

        {/* Education section remains unchanged */}
        <div className='flex flex-col gap-2 w-[90%] p-2 mt-5 bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30'>
          <h1 className='text-2xl font-bold text-yellow-400 text-center'>Education</h1>
          <div className='grid grid-cols-2 w-full'>
            <div className={`${myEduDiv}`}>
              <h1>Bachelor Of Degree In Information Technology</h1>
              <h1 className='text-gray-300'>
                Sardar Vallabh Bhai Patel Institute Of Technology
              </h1>
            </div>
            <div className={`${myEduDiv} text-gray-800 text-right`}>
              <h3>2022 - current</h3>
              <h3>8.13 CGPA</h3>
            </div>

            <div className={`${myEduDiv}`}>
              <h1>
                12<sup>th</sup> Science
              </h1>
              <h1 className='text-gray-300'>Urmi School</h1>
            </div>
            <div className={`${myEduDiv} text-gray-800 text-right`}>
              <h3>2022</h3>
              <h3>60%</h3>
            </div>

            <div className={`${myEduDiv}`}>
              <h1>
                10<sup>th</sup>
              </h1>
              <h1 className='text-gray-300'>Urmi School</h1>
            </div>
            <div className={`${myEduDiv} text-gray-800 text-right`}>
              <h3>2020</h3>
              <h3>80%</h3>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
