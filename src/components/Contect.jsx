import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center pt-[70px] w-full h-screen px-4 py-10 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200/80"
    >
      <h1 className="font-bold text-2xl text-yellow-400 mb-6 drop-shadow-lg">Contact Me</h1>

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
