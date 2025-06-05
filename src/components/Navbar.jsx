import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 815);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 815);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  const activeClass = "text-yellow-300 underline";
  const linkClass = "hover:text-yellow-200";

  return (
    <nav className='fixed z-50 w-full text-white py-3 px-4 sm:px-8 flex justify-between items-center bg-blue-500 shadow-xl border-b-2 border-white/20 rounded-b-lg' aria-label="Primary Navigation">

      <div>
        <h1 className='text-2xl font-bold text-yellow-400'>Prit</h1>
      </div>

      <div className="relative">
        {isMobile ? (
          <>
            <button
              className="bg-white text-black rounded-lg py-1 px-3 font-bold text-sm cursor-pointer"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              Menu
            </button>
            {menuOpen && (
              <ul className="absolute right-0 mt-2 bg-blue-600 text-white rounded-lg shadow-lg w-40 text-sm font-bold">
                <li className={`border-b border-white/20 px-4 py-2 hover:bg-blue-700 ${isActive("/portfolio") ? activeClass : ""}`}>
                  <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li className={`border-b border-white/20 px-4 py-2 hover:bg-blue-700 ${isActive("/portfolio/about") ? activeClass : ""}`}>
                  <Link to="/portfolio/about" onClick={() => setMenuOpen(false)}>About</Link>
                </li>
                <li className={`border-b border-white/20 px-4 py-2 hover:bg-blue-700 ${isActive("/portfolio/skills") ? activeClass : ""}`}>
                  <Link to="/portfolio/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                </li>
                <li className={`border-b border-white/20 px-4 py-2 hover:bg-blue-700 ${isActive("/portfolio/projects") ? activeClass : ""}`}>
                  <Link to="/portfolio/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                </li>
                <li className={`px-4 py-2 hover:bg-blue-700 ${isActive("/portfolio/contact") ? activeClass : ""}`}>
                  <Link to="/portfolio/contact" onClick={() => setMenuOpen(false)}>Contact Me</Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className='flex gap-3 sm:gap-5 text-sm text-white font-bold'>
            <li>
              <Link to="/portfolio" className={`${isActive("/portfolio") ? activeClass : linkClass}`}>Home</Link>
            </li>
            <li>
              <Link to="/portfolio/about" className={`${isActive("/portfolio/about") ? activeClass : linkClass}`}>About</Link>
            </li>
            <li>
              <Link to="/portfolio/skills" className={`${isActive("/portfolio/skills") ? activeClass : linkClass}`}>Skills</Link>
            </li>
            <li>
              <Link to="/portfolio/projects" className={`${isActive("/portfolio/projects") ? activeClass : linkClass}`}>Projects</Link>
            </li>
            <li>
              <Link to="/portfolio/contact" className={`${isActive("/portfolio/contact") ? activeClass : linkClass}`}>Contact Me</Link>
            </li>
          </ul>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
