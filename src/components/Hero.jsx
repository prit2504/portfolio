import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => (
    <div className="flex flex-col gap-10 h-[100%] pt-[100px]">
        
        <div className="absolute w-40 h-40 bg-yellow-300 rounded-full top-25 left-10 blur-2xl opacity-30"></div>
        <div className="absolute w-52 h-52 bg-blue-300 rounded-full bottom-25 right-10 blur-2xl opacity-30"></div>
        <div className="text-center flex flex-col justify-center items-center">
            <motion.h2
                initial={{ opacity: 0, x: -140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25 }}
                className="text-lg sm:text-xl text-gray-300 mb-2 font-bold">Hello, I am
            </motion.h2>

            <motion.h1
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay: 0.3 }}
                className="text-4xl sm:text-6xl text-yellow-400 font-semi mb-2 font-bold">
                Prit Panchal

            </motion.h1>
        
            <motion.p
                initial={{ opacity: 0, x: -140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-300 mt-2">
                Full Stack Developer
            </motion.p>

            <motion.p
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay: 0.9 }}
                className="max-w-2xl text-gray-300 leading-relaxed mt-6 mx-auto font-semibold w-[90%]">
                Passionate about building innovative web applications, with hands-on experience in MERN stack, Spring Boot, and scalable backend systems.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, x: -140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay: 1.2 }}
                className="bg-yellow-400 px-8 py-3 rounded-full text-black shadow-lg mt-8 font-semibold hover:bg-yellow-300 "

            >
                Hire me!
            </motion.button>
            {/* <motion.p
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay: 1.5 }}
                smooth={true}
                className="absolute w-full bottom-[15px] text-yellow-400 font-bold cursor-pointer mt-16 block text-lg font-medium hover:underline]"
            >
                <Link to="/portfolio/about">Scroll for more ↓</Link>
                
            </motion.p> */}
        </div>
    </div>
);


export default Hero;