import React from 'react'



const Projects = () => {
  let myDivStyle = "border-2";
  return (
    <div className='p-4 bg-white text-black h-full'>
      <h1 className='text-xl text-center sm:text-2xl'>Projects</h1>

      <div className='h-[90%] grid grid-cols-2 mt-4 gap-1'>
          <div className={`${myDivStyle}`}>DIVS</div>
          <div className={`${myDivStyle}`}>DIVS</div>
          <div className={`${myDivStyle}`}>DIVS</div>
          <div className={`${myDivStyle}`}>DIVS</div>
      </div>

    </div>
  )
}

export default Projects