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
import img_9 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233227.png'
import img_10 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233249.png'
import img_11 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233321.png'
import img_12 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233351.png'
import img_13 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233410.png'
import img_14 from '../assets/project_images/Pix_merge/Screenshot 2025-06-02 233429.png'

const Projects = () => {
  const [navProjects, setNavProjects] = useState(0);



  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform that allows users to browse products, add items to cart, place orders, and make secure payments. Features include admin product management, order tracking, and real-time inventory updates. Integrated Cloudinary for image uploads and optimized media storage. Built with the MERN stack and styled using responsive design principles for a seamless shopping experience.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      image: [img_1, img_2, img_3, img_4, img_5, img_6],
    },
    {
      title: "Social Media Platform",
      description: "A full-stack social media application where users can register, create posts, follow others, like, comment, and interact in real time. Developed using the MERN stack with a modern and mobile-friendly interface.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8],
    },

    {
      title: "PixMerge – All-in-One PDF & Image Utility Tool",
      description: "PixMerge is a web-based tool that allows users to create PDFs from images, convert image formats, merge and split PDFs, and compress documents. Built with Node.js, Express, and React.js, it offers a fast, clean, and responsive UI using Tailwind CSS. Ideal for users who need everyday file utilities without installing software.",
      techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      image: [img_9, img_10, img_11, img_12, img_13, img_14],
    }


  ];

  const btnStyle = "text-4xl cursor-pointer";

  const prevProject = () => setNavProjects((prev) => (prev - 1 + projects.length) % projects.length);
  const nextProject = () => setNavProjects((prev) => (prev + 1) % projects.length);

  const current = projects[navProjects];

  return (
    <div className="min-h-screen flex flex-col items-center py-3 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200">
      <h1 className="text-2xl sm:text-2xl font-bold text-yellow-400 mb-3">Projects</h1>

      <div className=" w-[90%] h-[90%]  flex flex-col sm:flex-row items-center justify-between px-1 py-2 gap-4 bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30">

        <AnimatePresence mode="wait">
          <motion.div
            key={navProjects}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col w-full justify-between text-center sm:text-left px-1 h-full"
          >

            <div
              className="flex flex-row gap-2 p-3 overflow-x-auto mb-4 w-full h-[40%] sm:h-[65%] rounded-lg shadow-lg scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {current.image.map((img, i) => (
                <img
                  className=" rounded-xl w-full border border-yellow-500 border-2 scroll-snap-align-center"
                  style={{ scrollSnapAlign: "center", }}
                  src={img}
                  alt="project"
                  key={i}
                />
              ))}
            </div>


            <div className='overflow-y-auto border rounded-lg h-[50%] backdrop-blur-md shadow-xl rounded-2xl border border-white/30 p-1'>
              <h2 className="text-2xl font-bold text-white mb-2">{current.title}
                <span className="ml-2 text-yellow-300 text-lg font-normal">
                  ({navProjects + 1} / {projects.length})
                </span>
              </h2>
              <p className="text-gray-900 font-semibold mb-4 p-2 text-justify">{current.description}</p>

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

            </div>
            <div className='flex flex-row  justify-between items-center'>
              <button onClick={prevProject} className={`${btnStyle}`} aria-label="Previous project">
                <i className="fa fa-chevron-circle-left text-white" aria-hidden="true"></i>
              </button>

              <button onClick={nextProject} className={`${btnStyle}`} aria-label="Next project">
                <i className="fa fa-chevron-circle-right text-white" aria-hidden="true"></i>
              </button>
            </div>
          </motion.div>

        </AnimatePresence>


      </div>
    </div>
  );
};

export default Projects;
