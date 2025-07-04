import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-cover bg-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-6 animate-fade-in">
            MATTHEW BARCROFT
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide animate-slide-up">
            Hello and welcome to my portfolio! Please feel free to take a look
            around and download my CV at the bottom of the page.
          </p>
        </div>

        <div className="flex justify-center relative z-10">
          <a
            href="#work"
            className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm tracking-wide">VIEW WORK</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
      <img
        src="/images/doggo.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: "0" }}
      ></img>
    </section>
  );
};

export default Hero;
