const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} MATTHEW BARCROFT
          </p>
          <p className="text-gray-500 text-sm tracking-wide mt-4 md:mt-0">
            CRAFTED ON NEXTJS USING THE AWS CLI TO DEPLOY
            <a
              href="https://github.com/MattBarcroft/portfolio"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm tracking-wide">
                SEE PORTFOLIO CODE HERE
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
