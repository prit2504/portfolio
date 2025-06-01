import { motion } from 'framer-motion'
import { li, ul } from 'framer-motion/client'
import html_img from '../assets/html-5.png'
import css_img from '../assets/css-3.png'
import react_img from '../assets/atom.png'
import js_img from '../assets/js.png'
import java_img from '../assets/java.png'
import mongoDB_img from '../assets/Mongodb.png'
import node_img from '../assets/nodejs.png'
import express_img from '../assets/express-js.png'
import tailwind_img from '../assets/tailwindcss.png'
import spring_img from '../assets/spring-boot.png'
import python_img from '../assets/python.png'
import cloudinary_img from '../assets/cloudinary-icon-8x.png'

let skillsArray = [
    {
        Html: {
            name: "HTML",
            image: html_img
        }
    },
    {
        Css: {
            name: "CSS",
            image: css_img
        }
    },
    {
        Tailwind: {
            name: "Tailwind CSS",
            image: tailwind_img
        }
    },
    {
        JavaScript: {
            name: "JavaScript",
            image: js_img
        }
    },
    {
        Java: {
            name: "Java",
            image: java_img
        }
    },
    {
        Python: {
            name: "Python",
            image: python_img
        }
    },
    {
        Node: {
            name: "Node.js",
            image: node_img
        }
    },
    {
        Express: {
            name: "Express.js",
            image: express_img
        }
    },
    {
        React: {
            name: "React.js",
            image: react_img
        }
    },
    {
        MongoDB: {
            name: "MongoDB",
            image: mongoDB_img
        }
    },
    {
        Spring: {
            name: "Spring Boot",
            image: spring_img
        }
    },
    {
        Cloudinary: {
            name: "Cloudinary",
            image: cloudinary_img
        }
    },
]

const Skills = () => {
    return (

        <motion.div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-[100%] h-[90%] sm:w-[80%] sm:h-[80%] flex flex-col justify-center items-center px-10 pb-10'>
                <motion.h1 className='mb-10 text-2xl text-yellow-400'>
                    Skills
                </motion.h1>


                <ul className='grid sm:grid-cols-4 grid-cols-3 w-full h-full gap-5 sm:gap-10'>
                    {

                        skillsArray.map((SI, i) => (
                            <li key={i} className='flex bg-slate-900 flex-col justify-center items-center items-center drop-shadow-xl rounded-xl p-2 sm:p-4 hover:scale-105 transition-all duration-300 ease-in-out'> 
                                <img src={Object.values(SI)[0].image} alt="" className='w-16 h-16' />
                                <h1 className='text-white text-center text-sm sm:text-lg'>{Object.values(SI)[0].name}</h1>
                            </li>
                        ))

                    }
                </ul>



            </div>

        </motion.div>

    )
}

export default Skills