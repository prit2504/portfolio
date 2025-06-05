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
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='w-full h-screen pt-[70px] flex flex-col  items-center bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200'>

            <Helmet>
                <title>Skills | Prit Panchal - Full Stack Developer</title>
                <meta
                    name="description"
                    content="Explore the front-end and back-end development skills of Prit Panchal, including React.js, Node.js, Java, MongoDB, Spring Boot, Tailwind CSS, and more."
                />
                <meta
                    name="keywords"
                    content="Prit Panchal, Web Developer Skills, MERN Stack, Full Stack Developer, React, Node.js, Java, Spring Boot, Tailwind, MongoDB"
                />
                <meta name="author" content="Prit Panchal" />

                {/* Open Graph for social sharing */}
                <meta property="og:title" content="Skills | Prit Panchal - Full Stack Developer" />
                <meta
                    property="og:description"
                    content="Full stack development skills of Prit Panchal. Covers front-end, back-end, and DevOps tools like Cloudinary."
                />
                <meta property="og:url" content="https://prit2504.github.io/portfolio/skills" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:title" content="Skills | Prit Panchal - Full Stack Developer" />
                <meta
                    name="twitter:description"
                    content="Tech stack and tools used by full stack developer Prit Panchal including React, Node, Spring Boot, MongoDB."
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className='w-full relative'>

                <h1 className='text-2xl text-center mb-3 text-yellow-400 font-bold'>Skills</h1>
                <Link to={'/portfolio/about'}>
                    <i className="absolute top-0 ml-5 text-4xl fa fa-chevron-circle-left" aria-hidden="true"></i>
                </Link>
                <Link to={'/portfolio/projects'}>
                    <i className="absolute top-0 right-0 mr-5 fa fa-chevron-circle-right text-4xl cursor-pointer duration-300 hover:scale-110" aria-hidden="true"></i>
                </Link>
            </div>
            <div className='w-[100%] h-[90%] sm:w-[80%] sm:h-[80%] flex flex-col items-center px-7 pb-10'>



                <ul className='grid sm:grid-cols-4 grid-cols-3 w-full h-full gap-3 sm:gap-10'>
                    {

                        skillsArray.map((SI, i) => (
                            <li key={i} className='flex flex-col justify-evenly items-center bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30 p-2 sm:p-4 hover:scale-105 transition-all duration-300 ease-in-out'>
                                <img src={Object.values(SI)[0].image} alt="" className='w-16 h-16' />
                                <h1 className='text-white font-bold text-center text-sm sm:text-lg'>{Object.values(SI)[0].name}</h1>
                            </li>
                        ))

                    }
                </ul>



            </div>

        </motion.div>

    )
}

export default Skills