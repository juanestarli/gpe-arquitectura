import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
    return (
        <>
            <div className="pt-24"> {/* Spacing for fixed navbar */}
                <Projects />
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
