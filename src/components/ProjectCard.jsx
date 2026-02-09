import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/proyectos/${project.id}`} className="relative group cursor-pointer overflow-hidden aspect-[4/3] bg-gray-100 block">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-center"
                >
                    <h3 className="text-white text-xl font-light tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-2 uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.category}
                    </p>
                </motion.div>
            </div>
        </Link>
    );
};

export default ProjectCard;
