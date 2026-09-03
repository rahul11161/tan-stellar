import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-[#191919]/80 backdrop-blur-md">
        {/* Logo */}
        <div className="text-3xl font-black tracking-tighter">
          TAN-STELLAR<span className="text-[#f9004d]">.</span>
        </div>
  
        {/* Links */}
        <ul className="hidden md:flex gap-10 font-semibold text-sm uppercase tracking-wider">
          <li className="hover:text-[#f9004d] cursor-pointer transition"><Link to="/" className="hover:text-[#f9004d]">Home</Link></li>
          <li className="hover:text-[#f9004d] cursor-pointer transition"><Link to="/service" className="hover:text-[#f9004d]">Service</Link></li>
          <li className="hover:text-[#f9004d] cursor-pointer transition"><Link to="/portfolio" className="hover:text-[#f9004d]">Portfolio</Link></li>
          <li className="hover:text-[#f9004d] cursor-pointer transition"><Link to="/about" className="hover:text-[#f9004d]">About</Link></li>
          <li className="hover:text-[#f9004d] cursor-pointer transition"><Link to="/contact" className="hover:text-[#f9004d]">Contact</Link></li>
        </ul>
  
        {/* Button */}
        <button className="border-2 border-white/20 hover:border-[#f9004d] hover:bg-[#f9004d] px-8 py-3 rounded-md text-sm font-bold transition duration-300">
          BUY NOW
        </button>
      </nav>
    );
  };
  
  export default Navbar;