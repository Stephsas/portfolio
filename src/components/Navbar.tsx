import {Link} from 'react-scroll';

const Navbar = () => {
  return (
<nav className="fixed top-0 w-full bg-black text-white py-4 border-b border-gray-600">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-lg font-bold">My Portfolio</div>
    <div>
      <Link to="hero" smooth={true} offset={-70} className="px-4 cursor-pointer">Home</Link>
      <Link to="skills" smooth={true} offset={-70} className="px-4 cursor-pointer">Skills</Link>
      <Link to="projects" smooth={true} offset={-70} className="px-4 cursor-pointer">Projects</Link>
    </div>
  </div>
</nav>

);
};

export default Navbar;