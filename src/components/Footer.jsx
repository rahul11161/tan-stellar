import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191919] pt-0 pb-12 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* THE CTA WRAPPER: This creates the "Half-White / Half-Black" effect */}
        <div className="flex flex-col lg:flex-row items-center -mt-32">
          
          {/* RED BOX: Negative margin-top pulls it into the white section above */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#f9004d] to-[#ff4b2b] p-12 md:p-20 rounded-lg shadow-2xl z-10">
            <p className="text-white/80 uppercase tracking-[3px] text-xs font-bold mb-6">
              Ready to do this
            </p>
            <h2 className="text-white text-5xl md:text-7xl font-black mb-10 leading-tight">
              Let's get <br /> to work
            </h2>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-[#f9004d] transition-all duration-300 uppercase tracking-widest text-sm">
              Contact Us
            </button>
          </div>

          {/* RIGHT SIDE LINKS: Visible against the black background */}
          <div className="w-full lg:w-1/2 lg:pl-24 mt-16 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <h4 className="text-gray-500 text-lg font-bold">Quick Link</h4>
              <ul className="text-gray-400 flex flex-col gap-3">
                <li className="hover:text-[#f9004d] cursor-pointer transition">Work</li>
                <li className="hover:text-[#f9004d] cursor-pointer transition">About</li>
                <li className="hover:text-[#f9004d] cursor-pointer transition">Let's Talk</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-gray-500 text-lg font-bold">Say Hello</h4>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li className="hover:text-white cursor-pointer">admin@example.com</li>
                <li className="hover:text-white cursor-pointer">hr@example.com</li>
              </ul>
              <div className="flex gap-5 mt-4">
                <FaFacebookF className="text-gray-500 hover:text-white cursor-pointer transition" />
                <FaLinkedinIn className="text-gray-500 hover:text-white cursor-pointer transition" />
                <FaInstagram className="text-gray-500 hover:text-white cursor-pointer transition" />
                <FaTwitter className="text-gray-500 hover:text-white cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>Copyright © 2026 Rainbow-Themes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;