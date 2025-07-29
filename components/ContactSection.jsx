import { Github, Linkedin } from "lucide-react";
import StravaLink from "./StravaLink";

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
            <p className="text-lg text-gray-500 leading-relaxed pb-20">
              I'm always interested in new opportunities and challenging
              projects that push the boundaries of what's possible. Give me a
              shout on LinkedIn and also download my CV to see a detailed
              overview of my skills and experience.
            </p>
            <br></br>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open("./MatthewBarcroftCV.pdf")}
                className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center font-bold rounded-lg text-xl  w-80 h-24 bg-[#434343] text-[#ffffff] justify-center"
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
              <div className="space-y-4 pb-6">
                <div className="flex space-x-8">
                  <a
                    href="https://linkedin.com/in/MatthewBarcroft"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm tracking-wide">LINKEDIN</span>
                  </a>
                  <a
                    href="https://github.com/MattBarcroft"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm tracking-wide">GITHUB</span>
                  </a>
                </div>
              </div>
              <StravaLink profileUrl="https://www.strava.com/athletes/3995572" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
