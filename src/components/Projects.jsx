import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img_1 from '../assets/project_images/Screenshot 2025-05-01 231316.png'
import img_2 from '../assets/project_images/Screenshot 2025-05-01 231408.png'
import img_3 from '../assets/project_images/Screenshot 2025-05-01 231433.png'
import img_4 from '../assets/project_images/Screenshot 2025-05-01 231519.png'
import img_5 from '../assets/project_images/Screenshot 2025-05-01 231536.png'
import img_6 from '../assets/project_images/Screenshot 2025-05-01 231708.png'
import img_7 from '../assets/project_images/Screenshot 2025-05-06 214037.png'
import img_8 from '../assets/project_images/Screenshot 2025-05-06 214122.png'

const Projects = () => {
  const [navProjects, setNavProjects] = useState(0);


  const ProjectImages = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8]
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with secure payments and product management.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      image: [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8],
    },
    {
      title: "Social Media Platform",
      description: "A social platform for connecting with friends and sharing moments.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8],
    },
    {
      title: "Online Education Platform",
      description: "A platform for resolving doubts and online education.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8],
    },
  ];

  const btnBase = "text-white font-semibold py-3 px-4 transition-all duration-200";
  const btnStyle = `${btnBase} bg-blue-500 hover:bg-blue-600`;

  const prevProject = () => setNavProjects((prev) => (prev - 1 + projects.length) % projects.length);
  const nextProject = () => setNavProjects((prev) => (prev + 1) % projects.length);

  const current = projects[navProjects];

  return (
    <div className="min-h-screen flex flex-col items-center py-3 bg-black">
      <h1 className="text-3xl sm:text-2xl font-bold text-yellow-400 mb-3">Projects</h1>

      <div className=" w-[90%] h-[90%] bg-gray-900 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between p-4 gap-4">
        <button onClick={prevProject} className={`${btnStyle} rounded-full`} aria-label="Previous project">
          Prev
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={navProjects}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col w-full text-center sm:text-left px-1 h-full"
          >
            {/* Image Section */}
            <div
              className="flex gap-5 overflow-x-auto mb-4 w-full h-[40%] sm:h-[65%] rounded-lg shadow-lg mt-4 scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {current.image.map((img, i) => (
                <img
                  className="p-1 m-1  rounded-xl border-2 border-yellow-400 object-scale-down scroll-snap-align-center"
                  style={{ scrollSnapAlign: "center", minWidth: "80%", maxWidth: "80%" }}
                  src={img}
                  alt="project"
                  key={i}
                />
              ))}
            </div>

            {/* Text Section */}
            <h2 className="text-2xl font-bold text-white mb-2">{current.title}
              <span className="ml-2 text-yellow-300 text-lg font-normal">
                ({navProjects + 1} / {projects.length})
              </span>
            </h2>
            <p className="text-gray-300 mb-4">{current.description}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {current.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={nextProject} className={`${btnStyle} rounded-full`} aria-label="Next project">
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
