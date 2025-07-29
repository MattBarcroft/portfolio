import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-cover bg-center relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-6 animate-fade-in">
            MATTHEW BARCROFT
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide animate-slide-up">
            Hello and welcome to my portfolio! Please feel free to take a look
            around and download my CV.
            <br></br>
          </p>
        </div>
        <div className="flex items-center space-x-4 z-10 relative justify-center">
          <button
            onClick={() => window.open("./MatthewBarcroftCV.pdf")}
            className="font-bold rounded-lg text-xl  w-80 h-16 bg-[#434343] text-[#ffffff] justify-center"
          >
            DOWNLOAD CV
          </button>
        </div>

        <div className="flex justify-center relative z-10 pt-8">
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

      <div className="absolute bottom-4 right-4 text-xs text-gray-500 z-10">
        Background photo courtesy of Jon Pemberton 💪
      </div>
    </section>
  );
};

export default Hero;
