import React from 'react'

const Contect = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-2 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200/80">
      <h1 className="font-bold text-2xl text-yellow-400 mb-3 drop-shadow-lg my-4">Contact Me</h1>
      <form
        className="flex flex-col w-[90%] mt-2 sm:w-full max-w-lg bg-white/20 backdrop-blur-md shadow-xl rounded-2xl border border-white/30 p-4 space-y-3"
        autoComplete="off"
      >
        <div className="flex flex-col">
          <label htmlFor="uname" className="text-gray-300 mb-1 font-bold">Name</label>
          <input
            type="text"
            id="uname"
            className=" bg-white/30 text-white text-base rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 mb-1 font-bold">Email</label>
          <input
            type="email"
            id="email"
            className="bg-white/30 text-white text-base rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="text-gray-300 mb-1 font-bold">Subject</label>
          <input
            type="text"
            id="subject"
            className="bg-white/30 text-white text-base rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Subject"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="msg" className="text-gray-300 mb-1 font-bold">Your Message</label>
          <textarea
            name="msg"
            id="msg"
            rows={5}
            className="bg-white/30 text-white text-base rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg mt-2 transition shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contect