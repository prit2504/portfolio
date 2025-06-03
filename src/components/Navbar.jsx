const Navbar = () => {
  return (
    <nav className='w-full text-white py-3 mt-0 px-8 flex justify-between items-center shadow-md shadow-black' aria-label="Primary Navigation">
        
      <div>
        <h1 className='text-[30px] text-yellow-400 bg-black/30 px-4 rounded-full'>P</h1>
      </div>

      <div>
        <ul className='flex flex-row gap-5 text-[17px] text-gray-400 font-bold'>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
  