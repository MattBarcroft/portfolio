const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} MATTHEW BARCROFT
          </p>
          <p className="text-gray-500 text-sm tracking-wide mt-4 md:mt-0">
            CRAFTED WITH PRECISION WITH A SPRINKLE OF AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
