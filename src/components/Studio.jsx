import React from 'react';

const Studio = () => {
    return (
        <section id="estudio" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl font-light tracking-[0.2em] uppercase mb-8">El Estudio</h2>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            En GPE Arquitectura, creemos en la pureza de la forma y la honestidad de los materiales.
                            Nuestra filosofía se basa en crear espacios que dialoguen con su entorno, utilizando la luz
                            como materia prima fundamental.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Fundado en 2015, nuestro estudio busca la atemporalidad en cada proyecto.
                            Nos alejamos de las tendencias pasajeras para enfocarnos en la habitabilidad,
                            la funcionalidad y la estética silenciosa.
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="lg:w-1/2 w-full h-[500px] bg-gray-200 relative overflow-hidden">
                        <img
                            src="/PHOTO-2026-02-09-12-55-53.jpg"
                            alt="El Estudio"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studio;
