const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-16 h-px bg-white"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-gray-500 leading-relaxed">
              I'm always interested in new opportunities and challenging
              projects that push the boundaries of what's possible. Also
              download my CV to see a detailed overview of my skills and
              experience.
            </p>
            <br></br>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open("./MatthewBarcroftCV.pdf")}
                className="font-bold rounded-lg text-xl  w-80 h-16 bg-[#434343] text-[#ffffff] justify-center"
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm tracking-wide text-gray-400 mb-4">
                EMAIL
              </h3>
              <a
                href="mailto:matt.barcroft@gmail.com"
                className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
              >
                matt.barcroft@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm tracking-wide text-gray-400 mb-4">
                SOCIAL
              </h3>
              <div className="flex space-x-8">
                <a
                  href="https://linkedin.com/in/MatthewBarcroft"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm tracking-wide">LINKEDIN</span>
                </a>
                <a
                  href="https://github.com/MattBArcroft"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm tracking-wide">GITHUB</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
