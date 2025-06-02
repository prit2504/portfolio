import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => (
    <div className="flex flex-col gap-10">
        <Navbar />
        <motion.div className="text-center flex flex-col justify-center items-center">
            <motion.h2 
                initial={{ opacity: 0, x: -140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25 }} 
                className="text-lg sm:text-xl text-gray-400 mb-2">Hello, I am
            </motion.h2>

            <motion.h1
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay:0.3 }}
                className="text-4xl sm:text-6xl text-yellow-400 font-semi mb-2">
                Prit Panchal

            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, x: -140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay:0.6 }}
                className="text-base sm:text-lg text-gray-300 mt-2">
                    Full Stack Developer | MERN Stack | Spring Boot
            </motion.p>

            <motion.p 
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay:0.9 }}
                className="max-w-2xl text-gray-400 leading-relaxed mt-6 mx-auto">
                Passionate about building innovative web applications, with hands-on experience in MERN stack, Spring Boot, and scalable backend systems.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay:1.2 }}
                className="bg-yellow-400 px-8 py-3 rounded-full text-black shadow-lg mt-8 font-semibold hover:bg-yellow-300 transition w-[120px]"

            >
                Hire me!
            </motion.button>
            <motion.a
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring', stiffness: 25, delay:1.5 }}
                href="#about"
                smooth={true}
                className="absolute w-full bottom-[15px] text-yellow-400 cursor-pointer mt-16 block text-lg font-medium hover:underline]"
            >
                Scroll for more ↓
            </motion.a>
        </motion.div>
    </div>
);


export default Hero;