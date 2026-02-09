import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

const featuredProjects = projects.slice(0, 4);

const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const scrollTo = (index) => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.scrollWidth / featuredProjects.length;
            containerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    };

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1;
        scrollTo(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1;
        scrollTo(newIndex);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-light tracking-[0.2em] uppercase">Proyectos Destacados</h2>
                        <div className="w-12 h-[1px] bg-black mt-4"></div>
                    </div>
                    <Link
                        to="/proyectos"
                        className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                    >
                        Ver Todos
                    </Link>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="flex-shrink-0 w-[85%] md:w-[45%] lg:w-[30%] snap-start"
                                whileHover={{ scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={`/proyectos/${project.id}`} className="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer block">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-white text-lg font-light tracking-widest uppercase">
                                            {project.title}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 mt-8 justify-end">
                        <button
                            onClick={handlePrev}
                            className="p-3 border border-black/20 hover:border-black transition-colors"
                        >
                            <ArrowLeft size={20} strokeWidth={1} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 border border-black/20 hover:border-black transition-colors"
                        >
                            <ArrowRight size={20} strokeWidth={1} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCarousel;
