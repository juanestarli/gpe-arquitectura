import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // Modern architecture
        title: 'Minimalismo y Luz',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop', // Concrete texture
        title: 'Espacios Puros',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop', // Interior
        title: 'Diseño Atemporal',
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:pb-32 md:px-24">
                <div className="container mx-auto">
                    <motion.div
                        key={`text-${currentSlide}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                            {slides[currentSlide].title}
                        </h1>
                        <Link to="/proyectos" className="group mt-4 inline-flex items-center gap-2 border border-white/30 bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:border-white">
                            Ver Proyectos
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>


            {/* Slide Indicators */}
            <div className="absolute bottom-10 right-10 flex gap-4 md:right-24">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[2px] w-8 transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
