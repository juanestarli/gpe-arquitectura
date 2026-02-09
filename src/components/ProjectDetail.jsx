import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="container mx-auto px-6 py-32 text-center">
                <h2 className="text-2xl font-light mb-8">Proyecto no encontrado</h2>
                <Link to="/proyectos" className="text-black border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"> Volver a Proyectos </Link>
            </div>
        );
    }

    return (
        <section className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link to="/proyectos" className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Volver a Proyectos
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Project Header & Info */}
                    <div className="lg:col-span-4 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 uppercase">
                                {project.title}
                            </h1>
                            <div className="w-12 h-[1px] bg-black mb-8"></div>
                            <p className="text-gray-600 font-light leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 pt-8 border-t border-gray-100"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="text-gray-400 mt-1" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Ubicación</p>
                                    <p className="text-sm font-medium">{project.location}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Calendar size={18} className="text-gray-400 mt-1" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Año</p>
                                    <p className="text-sm font-medium">{project.year}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Maximize size={18} className="text-gray-400 mt-1" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Superficie</p>
                                    <p className="text-sm font-medium">{project.area}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Gallery */}
                    <div className="lg:col-span-8 space-y-8">
                        {project.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="aspect-[16/10] bg-gray-100 overflow-hidden"
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} - Vista ${index + 1}`}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>
                        ))}

                        {/* Plans Section */}
                        {project.plans && project.plans.length > 0 && (
                            <div className="pt-16 space-y-8">
                                <div className="flex flex-col items-center">
                                    <h3 className="text-xl font-light uppercase tracking-widest mb-4">Planos</h3>
                                    <div className="w-8 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.plans.map((plan, index) => (
                                        <div key={index} className="border border-gray-100 p-4 bg-gray-50/50">
                                            <div className="aspect-square relative overflow-hidden bg-white flex items-center justify-center p-8">
                                                <img
                                                    src={plan}
                                                    alt={`Plano ${index + 1}`}
                                                    className="max-h-full max-w-full object-contain opacity-50 hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-4 text-center">Dibujo Técnico 0{index + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
