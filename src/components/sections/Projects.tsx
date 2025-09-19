'use client';

import { Project } from '@/lib/types';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-animate py-32 px-6 lg:px-16 relative bg-gradient-to-b from-[#2a2a3e] via-[#1f1f2f] to-[#26314e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title text-5xl lg:text-8xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </div>

        <div className="projects-container">
          <ul className="projects-list space-y-8 sm:space-y-0">
            {projects.filter(project => project.featured).map((project) => (
              <li key={project.id} className="project-item block sm:flex">
                <div
                  className="project-content cursor-pointer"
                  onClick={() => window.open(project.githubUrl || '#', '_blank')}
                >
                  <div className="w-full h-full bg-black/20 relative project-bg">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.name} background`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="text-overlay">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;


