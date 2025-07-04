import { skills } from "../data/skills";
import { GraduationCap, Cloud, Database, Trophy, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
            ABOUT
          </h2>
          <div className="w-16 h-px bg-white"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              I'm a Senior Full-Stack Engineer with 9+ years delivering
              scalable, high-performance web and cloud applications used by
              millions.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              I specialise in React Native, AWS, and DevOps, with a strong focus
              on developer experience, performance, and mentoring.
            </p>
          </div>

          <div className="space-y-12">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-sm tracking-wide text-gray-400 mb-4">
                  {skill.name.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="text-gray-500 text-sm">
                      {item}
                      {itemIndex < skill.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-thin tracking-tight mb-8">
              EDUCATION
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-2">
                    MSc – Digital & Technology Solutions Specialist
                  </h4>
                  <p className="text-gray-400 text-sm mb-1">
                    Sheffield Hallam University
                  </p>
                  <p className="text-gray-500 text-sm">Distinction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-2">
                    BSc – Web Systems
                  </h4>
                  <p className="text-gray-400 text-sm mb-1">
                    Sheffield Hallam University
                  </p>
                  <p className="text-gray-500 text-sm">1st Class Honours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-2">
                    Level 3 Award in Leadership & Management
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Leeds Beckett University
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-thin tracking-tight mb-8">
              CERTIFICATIONS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-1">
                    AWS Certified AI Practitioner
                  </h4>
                  <p className="text-gray-400 text-sm">Amazon Web Services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-1">
                    AWS Certified Cloud Practitioner
                  </h4>
                  <p className="text-gray-400 text-sm">Amazon Web Services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-1">
                    Graph Developer Associate
                  </h4>
                  <p className="text-gray-400 text-sm">Apollo GraphQL</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-300 mb-1">
                    Andy McEwan Memorial Prize for Employability
                  </h4>
                  <p className="text-gray-400 text-sm">Award</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
