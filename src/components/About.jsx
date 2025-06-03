import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const About = () => {
    let myEduDiv = "m-1 p-2 text-sm font-bold"

    const [nextAbout, setNextAbout] = useState(0);


    let aboutArray = [
        "Hello! I'm Prit, a Full Stack Developer passionate about building complete web applications from start to finish. I recently completed my studies in Information Technology and have been focusing on web development using modern technologies."
        ,

        "As a fresher, I’ve worked on several personal and academic projects where I handled both the frontend and backend development. I enjoy creating clean user interfaces and writing backend logic that makes the app come alive."
        ,

        "I'm always excited to learn new things and grow as a developer. I'm currently looking for opportunities where I can apply my skills, learn from real-world projects, and contribute to a development team."
    ]

    const showAbout = () => {
        let next = (nextAbout + 1) % 3;
        setNextAbout(next);
    }

    var screenWidth = window.innerWidth;
    useEffect(() => {

    }, [screenWidth, window.innerWidth])



    return (
        <div className='h-full p-4 flex flex-col items-center bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200'>
            <h1 className='text-2xl text-center mb-3 text-yellow-400 font-bold'>
                About Me
            </h1>

            <div className='flex flex-col justify-between items-center min-h-[30%] sm:h-[30%] md:min-h-[40%] w-[90%] bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30'>
                <div>

                    {
                        screenWidth < 815 ?
                            <motion.p className='text-sm p-3'
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 2, delay: 1.5 }}
                            >
                                {aboutArray[nextAbout]}
                            </motion.p>
                            :
                            aboutArray.map((item, i) => (
                                <p className='p-3' key={i}>{item}</p>
                            ))
                    }


                </div>

                {
                    screenWidth < 815 ? <button className='px-2 sm:px-4 py-1 mb-2 sm:py-2 sm:text-xl rounded-lg bg-yellow-500 text-black'
                        onClick={() => showAbout()}>next {nextAbout + 1}</button> : ""
                }

            </div>

            <div className='flex flex-col gap-2 w-[90%] p-2  mt-5 bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30'>
                <h1 className='text-2xl font-bold text-yellow-400 text-center'>Education</h1>
                <div className='grid grid-cols-2 w-full'>

                    <div className={`${myEduDiv}`}>
                        <h1>Bachelor Of Degree In Information Technology</h1>
                        <h1 className='text-gray-300'>Sardar Vallabh Bhai Patel Institute Of Technology</h1>
                    </div>
                    <div className={`${myEduDiv} text-gray-800 text-right`}>
                        <h1>2022 - current</h1>
                        <h1>8.13 CGPA</h1>
                    </div>


                    <div className={`${myEduDiv}`}>
                        <h1>12<sup>th</sup> Science</h1>
                        <h1 className='text-gray-300'>Urmi School</h1>
                    </div>
                    <div className={`${myEduDiv} text-gray-800 text-right`}>
                        <h1>2022</h1>
                        <h1>60%</h1>
                    </div>


                    <div className={`${myEduDiv}`}>
                        <h1>10<sup>th</sup></h1>
                        <h1 className='text-gray-300'>Urmi School</h1>
                    </div>
                    <div className={`${myEduDiv} text-gray-800 text-right`}>
                        <h1>2020</h1>
                        <h1>80%</h1>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default About