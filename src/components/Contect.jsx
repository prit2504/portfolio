import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center pt-[70px] w-full h-screen px-4 py-10 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200/80"
    >
      <Helmet>
        <title>Contact | Prit Panchal - Full Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Prit Panchal for freelance work, collaborations, or job opportunities in Full Stack Development (MERN & Spring Boot)."
        />
        <meta
          name="keywords"
          content="Prit Panchal, Contact, Email, Full Stack Developer, MERN, Spring Boot, Freelance Developer"
        />
        <meta name="author" content="Prit Panchal" />

        <meta property="og:title" content="Contact | Prit Panchal - Full Stack Developer" />
        <meta
          property="og:description"
          content="Reach out to Prit Panchal for freelance or collaborative projects in full stack web development."
        />
        <meta property="og:image" content="https://prit2504.github.io/portfolio/hero.jpg" />
        <meta property="og:url" content="https://prit2504.github.io/portfolio/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Contact | Prit Panchal - Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Connect with Prit Panchal for professional web development projects and opportunities."
        />
        <meta name="twitter:image" content="https://prit2504.github.io/portfolio/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Person",
                "name": "Prit Panchal",
                "jobTitle": "Full Stack Developer",
                "url": "https://prit2504.github.io/portfolio",
                "sameAs": [
                  "https://github.com/prit2504",
                  "https://www.linkedin.com/in/prit-panchal02"
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <div className='w-full relative'>
        <h1 className='text-2xl text-center mb-3 text-yellow-400 font-bold'>Contact Me</h1>
        <Link to={'/portfolio/projects'}>
          <i className="absolute top-0 ml-5 text-4xl fa fa-chevron-circle-left" aria-hidden="true"></i>
        </Link>
      </div>

      <form
        className="w-full max-w-[500px] bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30 p-4 space-y-1"
        autoComplete="off"
      >
        <div className="flex flex-col">
          <label htmlFor="uname" className="text-gray-300 mb-1 font-bold">Name</label>
          <input
            type="text"
            id="uname"
            className="bg-white/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 mb-1 font-bold">Email</label>
          <input
            type="email"
            id="email"
            className="bg-white/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="text-gray-300 mb-1 font-bold">Subject</label>
          <input
            type="text"
            id="subject"
            className="bg-white/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Subject"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="msg" className="text-gray-300 mb-1 font-bold">Your Message</label>
          <textarea
            id="msg"
            rows={5}
            className="bg-white/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition shadow-md"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
