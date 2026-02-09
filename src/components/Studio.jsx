import React from 'react';

const Studio = () => {
    return (
        <section id="estudio" className="pt-12 pb-24 bg-gray-50">
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

                    {/* Image */}
                    <div className="lg:w-1/2 w-full h-[500px] bg-gray-200 relative overflow-hidden">
                        <img
                            src="/PHOTO-2026-02-09-12-55-53.jpg"
                            alt="El Estudio"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-32">
                    <div className="flex flex-col items-center mb-16">
                        <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4">Servicios</h3>
                        <div className="w-12 h-[1px] bg-black/20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                title: "Anteproyecto y Proyecto",
                                desc: "Desarrollo integral de ideas, planos y documentación técnica para obras residenciales y comerciales."
                            },
                            {
                                title: "Dirección de Obra",
                                desc: "Supervisión técnica y administrativa para garantizar que cada detalle se ejecute según lo proyectado."
                            },
                            {
                                title: "Interiorismo",
                                desc: "Diseño de espacios interiores, selección de materiales, mobiliario e iluminación a medida."
                            },
                            {
                                title: "Consultoría",
                                desc: "Asesoramiento profesional en la búsqueda de lotes, factibilidad y optimización de recursos."
                            }
                        ].map((service, index) => (
                            <div key={index} className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">0{index + 1}</h4>
                                <h5 className="text-lg font-medium tracking-tight">{service.title}</h5>
                                <p className="text-gray-500 font-light leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studio;
