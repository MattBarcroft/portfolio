import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light tracking-wide">
              MATTHEW BARCROFT
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a
                href="#work"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                WORK
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <a
              href="#work"
              className="block text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </a>
            <a
              href="#about"
              className="block text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="block text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
