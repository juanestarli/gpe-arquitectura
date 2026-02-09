import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: "Casa del Bosque",
        category: "Residencial",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Edificio Horizonte",
        category: "Urbano",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Pabellón Solar",
        category: "Sustentable",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Loft Industrial",
        category: "Interiorismo",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Casa en la Playa",
        category: "Residencial",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Oficinas Centrales",
        category: "Corporativo",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    }
];

const Projects = () => {
    return (
        <section id="proyectos" className="py-24 bg-white">
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
