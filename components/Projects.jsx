import { Github } from "lucide-react";
import { learningProjects } from "../data/learningProjects";
import { workProjects } from "../data/workProjects";

const Projects = ({ type }) => {
  const renderCodeButton = (project) => {
    if (project.github) {
      return (
        <div className="flex space-x-8">
          <a
            href={project.github}
            className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 mr-2" />
            <span className="text-sm tracking-wide">CODE</span>
          </a>
        </div>
      );
    }
  };

  const projects = type === "learning" ? learningProjects : workProjects;
  const sectionTitle =
    type === "learning" ? "LEARNING & DEVELOPMENT PROJECTS" : "WORK PROJECTS";

  console.log("sectionTitle", sectionTitle);
  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <div className="w-16 h-px bg-white"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-b border-gray-800 pb-20 last:border-b-0"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 tracking-wide">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-gray-500 tracking-wide">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 border border-gray-700 text-gray-400 text-xs tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {renderCodeButton(project)}
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden group-hover:bg-gray-800 transition-colors duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <img src={`/images/${project.image}`}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
