import React from 'react';
import ProjectCard from './ProjectCard';

import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="proyectos" className="pt-12 pb-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl font-light tracking-[0.2em] uppercase mb-4">Proyectos</h2>
                    <div className="w-12 h-[1px] bg-black"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
