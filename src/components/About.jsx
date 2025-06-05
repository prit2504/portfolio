import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  let myEduDiv = "m-1 p-2 text-sm font-bold";

  const aboutArray = [
    "Hello! I'm Prit, a Full Stack Developer passionate about building complete web applications from start to finish. I recently completed my studies in Information Technology and have been focusing on web development using modern technologies.",
    "As a fresher, I’ve worked on several personal and academic projects where I handled both the frontend and backend development. I enjoy creating clean user interfaces and writing backend logic that makes the app come alive.",
    "I'm always excited to learn new things and grow as a developer. I'm currently looking for opportunities where I can apply my skills, learn from real-world projects, and contribute to a development team."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler to paginate with wrap-around
  const paginate = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = aboutArray.length - 1;
      if (newIndex >= aboutArray.length) newIndex = 0;
      return newIndex;
    });
  };

  // Variants for sliding
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

  // Track direction for animation
  const [direction, setDirection] = useState(0);

  const handlePaginate = (dir) => {
    setDirection(dir);
    paginate(dir);
  };

  const containerMinHeight = '8rem';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2 }}
      className='h-full p-4 flex flex-col items-center pt-[65px]'>
      <h1 className='text-2xl text-center mb-3 text-yellow-400 font-bold'>About Me</h1>

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
            <h1>2022 - current</h1>
            <h1>8.13 CGPA</h1>
          </div>

          <div className={`${myEduDiv}`}>
            <h1>
              12<sup>th</sup> Science
            </h1>
            <h1 className='text-gray-300'>Urmi School</h1>
          </div>
          <div className={`${myEduDiv} text-gray-800 text-right`}>
            <h1>2022</h1>
            <h1>60%</h1>
          </div>

          <div className={`${myEduDiv}`}>
            <h1>
              10<sup>th</sup>
            </h1>
            <h1 className='text-gray-300'>Urmi School</h1>
          </div>
          <div className={`${myEduDiv} text-gray-800 text-right`}>
            <h1>2020</h1>
            <h1>80%</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
