import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-400 font-light tracking-wide">
                    &copy; {new Date().getFullYear()} GPE Arquitectura. Todos los derechos reservados.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-xs text-gray-400 hover:text-black uppercase tracking-wider transition-colors">Instagram</a>
                    <a href="#" className="text-xs text-gray-400 hover:text-black uppercase tracking-wider transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
