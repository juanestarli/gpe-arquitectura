import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light tracking-[0.2em] uppercase mb-4">Contacto</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium tracking-wide">Información</h3>
                            <div className="flex items-center gap-4 text-gray-600 font-light">
                                <Mail size={20} strokeWidth={1.5} />
                                <span>contacto@gpearquitectura.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 font-light">
                                <Phone size={20} strokeWidth={1.5} />
                                <span>+54 11 1234 5678</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 font-light">
                                <MapPin size={20} strokeWidth={1.5} />
                                <span>Buenos Aires, Argentina</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-medium tracking-wide">Redes Sociales</h3>
                            <div className="flex gap-6">
                                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                                    <Instagram size={24} strokeWidth={1.5} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                                    <Linkedin size={24} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-8">
                        <div>
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Mensaje"
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent resize-none"
                            ></textarea>
                        </div>
                        <button className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                            Enviar Mensaje <Send size={16} />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
