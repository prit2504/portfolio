import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full text-white py-3 mt-0 px-8 flex justify-between items-center shadow-md shadow-black'>
        
        <div>
            <h1 className='text-3xl text-yellow-400'>P.P.K</h1>
        </div>

        <div>
            <ul className='flex flex-row gap-5'>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li></li>
            </ul>
        </div>

    </div>
  );
};

export default Navbar;
