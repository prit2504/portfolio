import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img_1 from '../assets/project_images/E-Com/Screenshot 2025-05-01 231220.webp';
import img_2 from '../assets/project_images/E-Com/Screenshot 2025-05-01 231316.webp';
import img_3 from '../assets/project_images/E-Com/Screenshot 2025-05-01 231408.webp';
import img_4 from '../assets/project_images/E-Com/Screenshot 2025-05-01 231433.webp';
import img_5 from '../assets/project_images/E-Com/Screenshot 2025-05-06 214122.webp';

import img_9 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233227.webp';
import img_10 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233249.webp';
import img_11 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233321.webp';
import img_12 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233351.webp';
import img_13 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233410.webp';
import img_14 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233429.webp';

const Projects = () => {
  const [navProjects, setNavProjects] = useState(0);

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform that allows users to browse products, add items to cart, place orders, and make secure payments. Features include admin product management, order tracking, and real-time inventory updates. Integrated Cloudinary for image uploads and optimized media storage. Built with the MERN stack and styled using responsive design principles for a seamless shopping experience.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      image: [img_1, img_2, img_3, img_4, img_5],
    },
    {
      title: "PixMerge – All-in-One PDF & Image Utility Tool",
      description:
        "PixMerge is a web-based tool that allows users to create PDFs from images, convert image formats, merge and split PDFs, and compress documents. Built with Node.js, Express, and React.js, it offers a fast, clean, and responsive UI using Tailwind CSS. Ideal for users who need everyday file utilities without installing software.",
      techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      image: [img_9, img_10, img_11, img_12, img_13, img_14],
    },
  ];

  const btnStyle = "text-3xl sm:text-4xl cursor-pointer";

  const prevProject = () => setNavProjects((prev) => (prev - 1 + projects.length) % projects.length);
  const nextProject = () => setNavProjects((prev) => (prev + 1) % projects.length);

  const current = projects[navProjects];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}

      className="min-h-screen w-full flex flex-col items-center px-4 sm:px-10 pt-[90px] pb-10 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200">
      <h1 className="text-2xl font-bold text-yellow-400 mb-6">Projects</h1>

      <div className="w-full max-w-6xl flex flex-col gap-6 bg-white/20 backdrop-blur-md p-4 sm:p-8 rounded-2xl shadow-xl border border-white/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={navProjects}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Images Section */}
            <div className="flex flex-row  gap-4 overflow-x-auto rounded-xl pb-2 scroll-smooth scrollbar-hide ">
              {current.image.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="rounded-lg border-2 border-yellow-500 h-[220px] sm:h-[300px] object-contains"

                />
              ))}
            </div>


            {/* Description Box */}
            <div className="bg-white/10 border border-white/30 rounded-xl p-4 shadow-inner">
              <h2 className="text-2xl font-bold text-white mb-2">
                {current.title}
                <span className="ml-2 text-yellow-300 text-lg font-medium">
                  ({navProjects + 1}/{projects.length})
                </span>
              </h2>

              <p className="text-gray-100 font-medium text-justify leading-relaxed max-h-60 overflow-y-auto p-2">
                {current.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                {current.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 px-2">
              <button onClick={prevProject} className={btnStyle} aria-label="Previous Project">
                <i className="fa fa-chevron-circle-left text-white" aria-hidden="true"></i>
              </button>

              <button onClick={nextProject} className={btnStyle} aria-label="Next Project">
                <i className="fa fa-chevron-circle-right text-white" aria-hidden="true"></i>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
